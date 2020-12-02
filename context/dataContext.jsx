import React, { createContext } from 'react'

export const dataContext = createContext()

const data = {
  links: [
    { name: 'Cursos', link: 'https://platzi.com/cursos/' },
    { name: 'Blog', link: 'https://platzi.com/blog/' },
    { name: 'Foro', link: 'https://platzi.com/foro/' },
    { name: 'Agenda', link: 'https://platzi.com/agenda/' },
    { name: 'TV', link: 'https://platzi.com/live/' },
    { name: 'Contáctanos', link: 'https://platzi.com/contacto/' },
  ],
  pricing: {
    before: 'Bs2.199',
    discount: 'Bs509',
    expert: 'Bs1.490',
    flag: 'https://static.platzi.com/media/flags/BO.png',
    monthly: 'Bs140',
    now: 'Bs1.690',
  },
  description: {
    expertPlus:
      'Acceso a todos los cursos, Escuelas y certificados para 2 personas en un solo plan a un precio especial anual.',
    expert:
      'El mejor precio del plan anual de Platzi con acceso a mas de 700 cursos, Escuelas y sus actualizaciones.',
  },
}

export const DataContextProvider = ({ children }) => (
  <dataContext.Provider value={data}>{children}</dataContext.Provider>
)
