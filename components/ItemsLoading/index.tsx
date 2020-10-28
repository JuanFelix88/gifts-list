import React from 'react'

import { MdLoop } from 'react-icons/md'

import { Container, IconRotation } from './style'

const ItemsLoading: React.FC = () => (
  <Container>
    Carregando a lista{' '}
    <IconRotation>
      <MdLoop size={20} />
    </IconRotation>
  </Container>
)

export default ItemsLoading
