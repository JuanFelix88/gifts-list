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

import { MdNewReleases, MdBackspace } from 'react-icons/md'

import Item from '../components/ItemToRemove'
import Logo from '../assets/logo.svg'
import {
  getItems,
  Items,
  selectItem,
  unselectItem,
  uri,
  removeItem
} from '../helpers/api'
import Head from 'next/head'
import io from 'socket.io-client'

import ItemsLoading from '../components/ItemsLoading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    socket.on('lista-update', (data: Items[]) => {
      setItems(data)
    })
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

  function handleOnDeleteItem(n: number) {
    return () => {
      removeItem(items[n]._id, localStorage.getItem('@phone') as string)
        .then(() => {
          setItems(items.filter((_, index) => n !== index))
        })
        .then(() => toast.success('Item removido com sucesso!'))
    }
  }

  return (
    <>
      <Container>
        <Head>
          <title>{'Remover itens da lista'}</title>
        </Head>
        <Header>
          <Logo />
          <NamesOfList>{'NATHALIA & JOÃO'}</NamesOfList>
        </Header>
        <SubHeaderOptions>
          <h2>Lista de itens para remover</h2>
          <button
            className="previous-button"
            onClick={() => router.push('/lista')}
          >
            Voltar
          </button>
        </SubHeaderOptions>
        <ItemsList>
          {loadingInitialRequest ? (
            <ItemsLoading />
          ) : items.length === 0 ? (
            <EmptyElement />
          ) : (
            items.map((item, index) => (
              <Item
                category={item.category || '👓 Utensílios'}
                available={!item.selected}
                name={item.name}
                key={item.name}
                onDelete={handleOnDeleteItem(index)}
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
