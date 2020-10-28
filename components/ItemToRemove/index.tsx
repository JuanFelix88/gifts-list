import React from 'react'

import { MdAddShoppingCart, MdLoop, MdClose, MdBackspace } from 'react-icons/md'

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
  onDelete?: () => void
  selfSelected?: boolean
}

const Item: React.FC<Props> = ({
  category,
  name,
  available,
  loading,
  onDelete,
  onSelect,
  onUnselect,
  selfSelected
}) => {
  return (
    <Container>
      <NameAndCategoryContainer>
        <h3>{name}</h3>
        <span>{category}</span>
        <span>{available ? '✅ Disponível' : '❌ Esgotado'}</span>
      </NameAndCategoryContainer>
      <SelectButtonContainer loading={(loading && 'true') || 'false'}>
        <button className="danger" onClick={onDelete}>
          <MdBackspace color="#fff" size={24} />
        </button>
      </SelectButtonContainer>
    </Container>
  )
}

export default Item
