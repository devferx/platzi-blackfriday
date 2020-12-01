import React from 'react'
import { VideoContainer, VideoStyled } from './styles'

export const Video = () => {
  return (
    <VideoContainer>
      <VideoStyled autoPlay loop>
        <source src="/videos/black-friday.mp4" />
      </VideoStyled>
    </VideoContainer>
  )
}
