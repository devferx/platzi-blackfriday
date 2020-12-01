import React from 'react'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const VideoStyled = styled.video`
  width: 100%;
`

export const Video = () => {
  return (
    <VideoContainer>
      <VideoStyled autoPlay loop>
        <source src="/videos/black-friday.mp4" />
      </VideoStyled>
    </VideoContainer>
  )
}
