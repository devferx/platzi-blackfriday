import React, { createContext, useState } from 'react'

export const formContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    isExpertPlus: true,
  })

  const setFormPlan = (isExpertPlus) => {
    setFormData({ ...formData, isExpertPlus })
  }

  return (
    <formContext.Provider value={{ formData, setFormPlan }}>
      {children}
    </formContext.Provider>
  )
}
