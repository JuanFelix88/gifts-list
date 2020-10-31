import React from 'react'

import { Button } from './style'

type Categories = 'cozinha' | 'banheiro' | 'utensílios' | 'limpeza'

interface Props {
  category: Categories
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  selected?: boolean
}

const CategoryFilter: React.FC<Props> = ({ category, onClick, selected }) => {
  return (
    <Button
      selected={selected ? 'true' : 'false'}
      onClick={onClick}
      type="button"
    >
      <span data-icon>
        {category === 'cozinha' && '🍴'}
        {category === 'banheiro' && '🛁'}
        {category === 'limpeza' && '🧹'}
        {category === 'utensílios' && '🏷'}
      </span>
      <span data-subscription>
        {category === 'cozinha' && 'Cozinha'}
        {category === 'banheiro' && 'Banheiro'}
        {category === 'limpeza' && 'Limpeza'}
        {category === 'utensílios' && 'Utensílios'}
      </span>
    </Button>
  )
}

export default CategoryFilter
