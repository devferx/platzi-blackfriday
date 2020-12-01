import React from 'react'
import { FormContainer } from './styles'
import { Header } from '../Header'
import { PricingSelector } from '../PricingSelector'

export const Form = () => {
  return (
    <FormContainer>
      <Header />
      <PricingSelector />
    </FormContainer>
  )
}
