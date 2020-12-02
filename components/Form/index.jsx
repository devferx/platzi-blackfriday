import React from 'react'
import { Header } from '../Header'
import { PricingSelector } from '../PricingSelector'
import { FormContainer, Input, Button } from './styles'

export const Form = () => {
  return (
    <FormContainer>
      <Header />
      <PricingSelector />
      <Input type="text" placeholder="Nombre" />
      <Input type="text" placeholder="nombre@correo.com" />
      <Button type="submit">Quiero regístrarme</Button>
    </FormContainer>
  )
}
