import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Container,
  Header,
  NamesOfList,
  SubHeaderOptions
} from '../styles/pages/lista'
import Logo from '../assets/logo.svg'
import { ButtonSubmit } from '../styles/pages/logon'
import { FormularyContainer } from '../styles/pages/adicionar'
import { addItem } from '../helpers/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddList: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  function handleOnChangeName(event: any) {
    const value = event.target.value as string

    setName(value)
  }

  function handleOnChangeCategory(event: any) {
    const value = event.target.value as string

    setCategory(value)
  }

  function handleOnSubmitForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const phone = localStorage.getItem('@phone') || 'all'

    addItem(name, phone, category)
      .then(() => toast.success('Item adicionado com sucesso 🎉'))
      .then(() => {
        setName('')
        setCategory('')
      })
  }

  return (
    <>
      <Container>
        <Head>
          <title>{'Adicionar Item'}</title>
        </Head>
        <Header>
          <NamesOfList>{'ROBSON & MARIA'}</NamesOfList>
        </Header>
        <SubHeaderOptions>
          <h2 style={{ maxWidth: 160 }}>Adicionar um novo item</h2>
          <button
            className="previous-button"
            style={{ padding: '5px 15px' }}
            onClick={() => router.push('/lista')}
          >
            Voltar
          </button>
        </SubHeaderOptions>
        <FormularyContainer onSubmit={handleOnSubmitForm}>
          <label htmlFor="">Nome do produto</label>
          <input
            value={name}
            type="text"
            placeholder="Nome detalhado"
            onChange={handleOnChangeName}
          />

          <label htmlFor="">Categoria</label>
          <select value={category} onChange={handleOnChangeCategory}>
            <option hidden value="">
              Selecione...
            </option>
            <option value="🍴 Cozinha">🍴 Cozinha</option>
            <option value="🏷 Utensílios">🏷 Utensílios</option>
            <option value="🧹 Limpeza">🧹 Utensílios</option>
            <option value="🛀🏽 Banheiro">🛀🏽 Banheiro</option>
            {/* <option value="🛋 Lazer">🛋 Lazer</option> */}
          </select>
          <ButtonSubmit
            disabled={category.length === 0 || name.length === 0}
            style={{ margin: '10px 0px' }}
          >
            Adicionar 🚀
          </ButtonSubmit>
        </FormularyContainer>
      </Container>
      <ToastContainer />
    </>
  )
}

export default AddList
