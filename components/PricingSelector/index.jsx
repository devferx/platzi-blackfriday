import React, { useContext } from 'react'
import { formContext } from '../../context/formContext'
import {
  PricingSelectorContainer,
  PriceButtonContainer,
  PriceButton,
} from './styles'

export const PricingSelector = () => {
  const { formData, setFormPlan } = useContext(formContext)
  return (
    <PricingSelectorContainer>
      <PriceButtonContainer>
        <PriceButton
          type="button"
          active={formData.isExpertPlus}
          onClick={() => setFormPlan(true)}
        >
          Plan Expert+
        </PriceButton>
      </PriceButtonContainer>
      <PriceButtonContainer>
        <PriceButton
          type="button"
          active={!formData.isExpertPlus}
          onClick={() => setFormPlan(false)}
        >
          Plan Expert
        </PriceButton>
      </PriceButtonContainer>
    </PricingSelectorContainer>
  )
}
