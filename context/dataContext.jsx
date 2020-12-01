import React, { createContext } from 'react'

export const dataContext = createContext()

export const DataContextProvider = ({ children }) => {
  const data = {
    links: [
      { name: 'Cursos', link: 'https://platzi.com/cursos/' },
      { name: 'Blog', link: 'https://platzi.com/blog/' },
      { name: 'Foro', link: 'https://platzi.com/foro/' },
      { name: 'Agenda', link: 'https://platzi.com/agenda/' },
      { name: 'TV', link: 'https://platzi.com/live/' },
      { name: 'Contáctanos', link: 'https://platzi.com/contacto/' },
    ],
  }

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>
}
