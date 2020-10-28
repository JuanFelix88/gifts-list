import styled, { keyframes } from 'styled-components'

const ShowFormDownToUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
export const FormularyContainer = styled.form`
  display: flex;
  padding: 5px 20px;
  flex-direction: column;
  @media (min-width: 700px) {
    padding: 5px 18%;
  }
  @media (min-width: 1400px) {
    padding-left: 30%;
    padding-right: 30%;
  }
  animation: ${ShowFormDownToUp} 950ms 550ms ease backwards;

  label {
    margin: 8px 0px 4px 0px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.055em;
    color: ${p => p.theme.colors.text};
  }

  select,
  input {
    height: 43px;
    background: #ffffff;
    border: 1px solid #c7c7c7;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.13);
    border-radius: 4px;
    font-size: 16px;
    padding: 3px 5px;
    margin-bottom: 5px;

    > option {
      border: none;
    }
  }
`
