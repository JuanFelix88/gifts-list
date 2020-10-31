import React, { useEffect, useState } from 'react'
import {
  Container,
  Header,
  NamesOfList,
  ItemsList,
  SubHeaderOptions,
  EmptyItems,
  CategoryContext
} from '../styles/pages/lista'
import { useRouter } from 'next/router'

import { MdNewReleases, MdMoreHoriz } from 'react-icons/md'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Searcher from '../components/Searcher'

import Item from '../components/Item'
import Logo from '../assets/logo.svg'
import { getItems, Items, selectItem, unselectItem, uri } from '../helpers/api'
import Head from 'next/head'
import io from 'socket.io-client'

import ItemsLoading from '../components/ItemsLoading'
import CategoryFilter from '../components/CategoryFilter'

type Category = 'cozinha' | 'banheiro' | 'limpeza' | 'utensílios' | null

const ListView: React.FC = () => {
  const [loadingInitialRequest, setLoadingInitialRequest] = useState(true)
  const [items, setItems] = useState<Items[]>([])
  const router = useRouter()
  const [valueSearcher, setValueSearcher] = useState('')
  const [categorySearch, setCategorySearch] = useState<Category>(null)

  useEffect(() => {
    getItems(localStorage.getItem('@phone') || 'all')
      .then(items => setItems(items.data))
      .then(() => setLoadingInitialRequest(false))
  }, [])

  useEffect(() => {
    const socket = io(uri)
    socket.on('lista-update', (data: Items[]) => setItems(data))
  }, [])

  useEffect(() => {
    const phoneNumberIsNull = !localStorage.getItem('@phone')

    if (phoneNumberIsNull) router.push('/')
  }, [])

  useEffect(() => {
    console.log(valueSearcher)
  }, [valueSearcher])

  const EmptyElement = () => (
    <EmptyItems>
      <span>Não há itens para mostrar</span>
      <MdNewReleases style={{ marginLeft: 3 }} size={16} />
    </EmptyItems>
  )

  function handleOnSelectItem(n: string) {
    return () => {
      const newItems = items.map(item => {
        if (item._id !== n) return item

        return {
          ...item,
          loading: true
        }
      })

      setItems(newItems)
      selectItem(n, localStorage.getItem('@phone') as string)
      toast.info(
        'Obrigado por selecionar este item 🎉 Lembrando que a cor preferêncial para os produtos é a cor vermelha ou preta.'
      )
    }
  }

  function handleOnUnselectItem(n: string) {
    return () => {
      const newItems = items.map(item => {
        if (item._id !== n) return item

        return {
          ...item,
          loading: true
        }
      })

      setItems(newItems)
      unselectItem(n, localStorage.getItem('@phone') as string)
    }
  }

  function handleOnChangeSearcher(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setValueSearcher(event.target.value)
  }

  function handleOnChangeCategory(category: Category): void {
    if (categorySearch === category) return setCategorySearch(null)
    setCategorySearch(category)
  }

  return (
    <>
      <Container>
        <Head>
          <title>{'Lista de Robson & Maria'}</title>
        </Head>
        <Header>
          <NamesOfList>{'ROBSON & MARIA'}</NamesOfList>
        </Header>
        <SubHeaderOptions>
          <h2>Lista de Presentes</h2>
          <button onClick={() => router.push('/adicionar')}>
            <MdMoreHoriz color="#404040" size={24} />
          </button>
        </SubHeaderOptions>
        <CategoryContext>
          <CategoryFilter
            onClick={() => handleOnChangeCategory('cozinha')}
            selected={categorySearch === 'cozinha'}
            category="cozinha"
          />
          <CategoryFilter
            onClick={() => handleOnChangeCategory('banheiro')}
            selected={categorySearch === 'banheiro'}
            category="banheiro"
          />
          <CategoryFilter
            onClick={() => handleOnChangeCategory('limpeza')}
            selected={categorySearch === 'limpeza'}
            category="limpeza"
          />
          <CategoryFilter
            onClick={() => handleOnChangeCategory('utensílios')}
            selected={categorySearch === 'utensílios'}
            category="utensílios"
          />
        </CategoryContext>
        <Searcher value={valueSearcher} onChange={handleOnChangeSearcher} />
        <ItemsList>
          {loadingInitialRequest ? (
            <ItemsLoading />
          ) : items.length === 0 ? (
            <EmptyElement />
          ) : (
            items
              .filter(item => {
                const testItemIsVisibleByCategorySelect =
                  categorySearch === null ||
                  item.category?.toLocaleLowerCase().indexOf(categorySearch) >=
                    0

                if (valueSearcher === '') {
                  return testItemIsVisibleByCategorySelect
                }

                const nameProduct = item.name.toLocaleLowerCase()

                const categoryName = item.category?.toLocaleLowerCase()

                const lowerSearchValue = valueSearcher.toLocaleLowerCase()

                return (
                  (testItemIsVisibleByCategorySelect &&
                    categoryName &&
                    categoryName.indexOf(lowerSearchValue) >= 0) ||
                  nameProduct.indexOf(lowerSearchValue) >= 0
                )
              })
              .map(item => (
                <Item
                  onSelect={handleOnSelectItem(item._id)}
                  category={item.category || '👓 Utensílios'}
                  available={!item.selected}
                  name={item.name}
                  key={item.name}
                  onUnselect={handleOnUnselectItem(item._id)}
                  loading={item.loading}
                  selfSelected={
                    item.selected?.number === localStorage.getItem('@phone')
                  }
                />
              ))
          )}
        </ItemsList>
      </Container>
      <ToastContainer />
    </>
  )
}

export default ListView
