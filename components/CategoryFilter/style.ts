import styled, { css } from 'styled-components'

interface ButtonProps {
  selected?: 'true' | 'false'
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 90px;
  min-width: 90px;
  margin: 5px;
  height: 90px;
  ${p =>
    p.selected === 'true'
      ? css`
          background: linear-gradient(93.18deg, #e0e2f1 11.14%, #e0e2f1 90.01%);
          border: solid 1px #d2d5ff;
        `
      : css`
          background: linear-gradient(
            93.18deg,
            #e7e7e7 11.14%,
            rgba(231, 231, 231, 0.7) 54.83%,
            #e7e7e7 90.01%
          );
          border: 1px solid #e3e3e3;
        `}

  box-sizing: border-box;
  /* shadow-category */

  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.11);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  [data-icon] {
    font-family: Inter;
    font-size: 40px;
    filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.08));
  }

  [data-subscription] {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.055em;
    margin: 3px 0px;
    color: #404040;
  }
`
