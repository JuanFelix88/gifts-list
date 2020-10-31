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
  background: linear-gradient(
    93.18deg,
    #e7e7e7 11.14%,
    rgba(231, 231, 231, 0.56) 54.83%,
    #e7e7e7 90.01%
  );
  /* box-fine-line */

  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
  list-style: none;
  box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.05);
  display: flex;
  width: 100%;
  min-height: 105px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  animation: ${ShowElement} 350ms ease backwards;
  box-sizing: border-box;
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
    white-space: wrap;
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
    background: #e33a3ab8;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #e33a3ab8 43.75%,
      #e33a3ab8 100%
    );
    box-shadow: 0px 2px 12px #d13d4840;
  }

  button {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(74, 228, 125, 0.4896) 43.75%,
      rgba(74, 228, 125, 0.72) 100%
    );
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
