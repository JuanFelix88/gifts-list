import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { MdLightbulbOutline } from 'react-icons/md'

import { signIn } from '../helpers/api'

import {
  Container,
  NamesOfList,
  FormularyContainer,
  ButtonSubmit,
  SupportLink
} from '../styles/pages/logon'

import LogoLogon from '../assets/logo-logon.svg'

const LinkHelp =
  'https://api.whatsapp.com/send?phone=554199625442&text=Ola%2C%20eu%20estou%20com%20d%C3%BAvidas%2C%20voc%C3%AA%20poderia%20me%20ajudar%3F'

async function handleStorePhoneNumber(phone: string): Promise<void> {
  localStorage.setItem('@phone', phone)
}

const Home: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const router = useRouter()

  function handleOnChangePhoneNumber(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const { value } = event.target

    setPhoneNumber(value)
  }

  function handleOnSubmitForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    signIn(phoneNumber)
      .then(result => handleStorePhoneNumber(result.data.number))
      .then(() => router.push('/lista'))
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LogoLogon />
      <NamesOfList>{'NATHALIA & JOÃO'}</NamesOfList>
      <FormularyContainer onSubmit={handleOnSubmitForm}>
        <h4>Número de telefone</h4>
        <input
          value={phoneNumber}
          onChange={handleOnChangePhoneNumber}
          autoFocus
          type="text"
          placeholder="99999-9999"
        />
        <ButtonSubmit disabled={phoneNumber.length < 8} type="submit">
          Entrar
        </ButtonSubmit>
      </FormularyContainer>
      <SupportLink href={LinkHelp}>
        Obter Ajuda <MdLightbulbOutline size={16} />
      </SupportLink>
    </Container>
  )
}

export default Home
