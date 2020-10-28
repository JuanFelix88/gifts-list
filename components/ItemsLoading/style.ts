import styled, { keyframes } from 'styled-components'

const AnimationRotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const AnimationSmoothingLinearOpacity = keyframes`
  0%, 100% {
    opacity: 1;
  }
  55% {
    opacity: 0.8;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 5px;
  background-color: ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.background};
  animation: ${AnimationSmoothingLinearOpacity} 2s ease infinite backwards;
  border-radius: 5px;
`

export const IconRotation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  color: ${p => p.theme.colors.background};
  animation: ${AnimationRotate} 800ms linear infinite backwards;
`
