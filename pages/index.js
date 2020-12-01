import React from 'react'
import { Navbar } from '../components/Navbar'
import { ContainerStyled } from '../components/Layout'
import { Form } from '../components/Form'

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <Form />
      </ContainerStyled>
    </>
  )
}

export default Home
