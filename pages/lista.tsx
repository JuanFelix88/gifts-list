import React, { useEffect, useState } from 'react'
import {
  Container,
  Header,
  NamesOfList,
  ItemsList,
  SubHeaderOptions,
  EmptyItems
} from '../styles/pages/lista'
import { useRouter } from 'next/router'

import { MdNewReleases } from 'react-icons/md'

import Item from '../components/Item'
import Logo from '../assets/logo.svg'
import { getItems, Items, selectItem, unselectItem, uri } from '../helpers/api'
import Head from 'next/head'
import io from 'socket.io-client'

import ItemsLoading from '../components/ItemsLoading'

const ListView: React.FC = () => {
  const [loadingInitialRequest, setLoadingInitialRequest] = useState(true)
  const [items, setItems] = useState<Items[]>([])
  const router = useRouter()

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

  const EmptyElement = () => (
    <EmptyItems>
      <span>Não há itens para mostrar</span>
      <MdNewReleases style={{ marginLeft: 3 }} size={16} />
    </EmptyItems>
  )

  function handleOnSelectItem(n: number) {
    return () => {
      const newItems = items.map((item, index) => {
        if (index !== n) return item

        return {
          ...item,
          loading: true
        }
      })

      setItems(newItems)
      selectItem(items[n]._id, localStorage.getItem('@phone') as string)
    }
  }

  function handleOnUnselectItem(n: number) {
    return () => {
      const newItems = items.map((item, index) => {
        if (index !== n) return item

        return {
          ...item,
          loading: true
        }
      })

      setItems(newItems)
      unselectItem(items[n]._id, localStorage.getItem('@phone') as string)
    }
  }

  return (
    <Container>
      <Head>
        <title>{'Lista de Robson & Maria'}</title>
      </Head>
      <Header>
        <Logo />
        <NamesOfList>{'ROBSON & MARIA'}</NamesOfList>
      </Header>
      <SubHeaderOptions>
        <h2>Lista de Presentes</h2>
        <button onClick={() => router.push('/adicionar')}>Adicionar</button>
      </SubHeaderOptions>
      <ItemsList>
        {loadingInitialRequest ? (
          <ItemsLoading />
        ) : items.length === 0 ? (
          <EmptyElement />
        ) : (
          items.map((item, index) => (
            <Item
              onSelect={handleOnSelectItem(index)}
              category={item.category || '👓 Utensílios'}
              available={!item.selected}
              name={item.name}
              key={item.name}
              onUnselect={handleOnUnselectItem(index)}
              loading={item.loading}
              selfSelected={
                item.selected?.number === localStorage.getItem('@phone')
              }
            />
          ))
        )}
      </ItemsList>
    </Container>
  )
}

export default ListView
