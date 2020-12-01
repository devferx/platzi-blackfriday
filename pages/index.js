import React from 'react'
import { Navbar } from '../components/Navbar'
import { ContainerStyled } from '../components/Layout'
import { Form } from '../components/Form'
import { Video } from '../components/Video'

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <Form />
        <Video />
      </ContainerStyled>
    </>
  )
}

export default Home
