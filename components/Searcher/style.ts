import styled, { css, keyframes } from 'styled-components'

const ShowContainer = keyframes`
  from {
    opacity: 0;
    transform: translateY(15%);
  } to {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  position: relative;
  @media (min-width: 700px) {
    padding: 10px 18%;
  }

  @media (min-width: 1400px) {
    padding-left: 30%;
    padding-right: 30%;
  }
  animation: ${ShowContainer} 650ms 850ms ease backwards;
`

export const Input = styled.input<PlaceHolderProperties>`
  border: 0.5px solid #e3e3e3;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  padding: 2px 5px;
  font-size: 16px;
  transition: 180ms ease;

  ${p =>
    p.focused === 'true'
      ? css`
          background: #fff;
        `
      : css`
          background: #ececec;
        `}
`

interface PlaceHolderProperties {
  focused?: 'true' | 'false'
}

const ShowPlaceHolder = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20%)
  } to {
    opacity: 1;
    transform: translateX(0%)
  }
`

const HidePlaceHolder = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%)
  } to {
    opacity: 0;
    transform: translateX(-20%)
  }
`

export const PlaceHolder = styled.span<PlaceHolderProperties>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 26px;
  top: calc(50% - 13px);
  left: calc(50% - 53px);

  ${p =>
    p.focused === 'true'
      ? css`
          animation: ${HidePlaceHolder} 200ms ease forwards;
        `
      : css`
          animation: ${ShowPlaceHolder} 200ms ease forwards;
        `}

  position: absolute;

  /* identical to box height */

  letter-spacing: 0.055em;

  color: #323232;
  align-items: center;
`
