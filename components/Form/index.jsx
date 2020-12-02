import React, { useContext, useRef } from 'react'
import { dataContext } from '../../context/dataContext'
import { formContext } from '../../context/formContext'
import { Header } from '../Header'
import { PricingSelector } from '../PricingSelector'
import { FormContainer, InformationLabel, Input, Button } from './styles'

export const Form = () => {
  const { description } = useContext(dataContext)
  const { formData } = useContext(formContext)
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    formRef.current.reset()
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <Header />
      <PricingSelector />
      <InformationLabel>
        {formData.isExpertPlus ? description.expertPlus : description.expert}
      </InformationLabel>
      <Input type="text" minLength={3} placeholder="Nombre" />
      <Input type="email" placeholder="nombre@correo.com" />
      <Button type="submit">Quiero regístrarme</Button>
    </FormContainer>
  )
}
