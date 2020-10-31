import React, { useState, useRef, useEffect } from 'react'

import { Container, Input, PlaceHolder } from './style'

import { MdSearch } from 'react-icons/md'

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const Searcher: React.FC<Props> = ({ onChange, value }) => {
  const refInput = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)
  const [internalValue, setInternalValue] = useState('')

  function handleOnClickContainer() {
    refInput.current?.focus()
  }

  const stateValue = value || internalValue

  const isFocused = focus || stateValue !== '' ? 'true' : 'false'

  function handleOnChangeInput(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setInternalValue(event.target.value)
    onChange?.(event)
  }

  return (
    <Container onClick={handleOnClickContainer}>
      <PlaceHolder focused={isFocused}>
        <MdSearch style={{ margin: '3px' }} size={18} />
        Pesquisar
      </PlaceHolder>
      <Input
        value={stateValue}
        onChange={handleOnChangeInput}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        focused={isFocused}
        ref={refInput}
      />
    </Container>
  )
}

export default Searcher
