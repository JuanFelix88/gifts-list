import React from 'react'

import { MdAddShoppingCart, MdLoop, MdClose } from 'react-icons/md'

import {
  Container,
  NameAndCategoryContainer,
  SelectButtonContainer
} from './style'

interface Props {
  name: string
  category: string
  available?: boolean
  loading?: boolean
  onSelect?: () => void
  onUnselect?: () => void
  selfSelected?: boolean
}

const Item: React.FC<Props> = ({
  category,
  name,
  available,
  loading,
  onSelect,
  onUnselect,
  selfSelected
}) => {
  const reserve = !available && selfSelected
  const soldOff = !available && !selfSelected

  return (
    <Container>
      <NameAndCategoryContainer>
        <h3>{name}</h3>
        <span>{category}</span>
        <span>
          {available && '✅ Disponível'}
          {reserve && '😎 Reservado por você'}
          {soldOff && '👥 Reservado por outra pessoa'}
        </span>
      </NameAndCategoryContainer>
      <SelectButtonContainer loading={(loading && 'true') || 'false'}>
        {available && !selfSelected && (
          <button onClick={onSelect}>
            {loading && <MdLoop color="#fff" size={24} />}
            {!loading && <MdAddShoppingCart color="#fff" size={24} />}
          </button>
        )}
        {available && selfSelected ? (
          <button onClick={onSelect}>
            {loading && <MdLoop color="#fff" size={24} />}
            {!loading && <MdAddShoppingCart color="#fff" size={24} />}
          </button>
        ) : (
          selfSelected && (
            <button className="danger" onClick={onUnselect}>
              {loading && <MdLoop color="#fff" size={24} />}
              {!loading && <MdClose color="#fff" size={24} />}
            </button>
          )
        )}
      </SelectButtonContainer>
    </Container>
  )
}

export default Item
