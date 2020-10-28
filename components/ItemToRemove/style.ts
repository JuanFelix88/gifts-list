import styled, { keyframes, css } from 'styled-components'

const ShowElement = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const AnimationRotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

export const Container = styled.li`
  background-color: ${p => p.theme.colors.background};
  list-style: none;
  box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.19);
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  animation: ${ShowElement} 350ms ease backwards;
`

export const NameAndCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  height: 100%;
  max-width: 70%;

  & > h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 11pt;
    line-height: 22px;
    letter-spacing: 0.055em;
    color: #404040;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > span {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 9pt;
    line-height: 17px;
    letter-spacing: 0.055em;
    color: ${p => p.theme.colors.text};
    margin: 2px;
  }
`

interface SelectButtonProperties {
  loading?: 'true' | 'false'
}

export const SelectButtonContainer = styled.div<SelectButtonProperties>`
  display: flex;
  padding: 10px;
  margin-left: auto;
  height: 100%;

  .danger {
    background-color: #e33a3ab8;
    box-shadow: 0px 2px 12px #d13d4840;
  }

  button {
    background: rgba(24, 226, 93, 0.72);
    box-shadow: 0px 2px 12px rgba(61, 209, 85, 0.25);
    border-radius: 6px;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: 0.25s ease;
    cursor: pointer;
    animation: ${ShowElement} 250ms ease backwards;

    ${p =>
      p.loading === 'false'
        ? ''
        : css`
            svg {
              animation: ${AnimationRotate} 800ms linear infinite backwards;
            }
          `}

    &:hover {
      opacity: 0.7;
    }
  }
`
