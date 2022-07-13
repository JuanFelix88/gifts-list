import styled, { keyframes } from 'styled-components'

const ShowTitleHeader = keyframes`
  from {
    opacity: 0;
    transform: translateX(3%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  position: fixed;
  background-color: ${p => p.theme.colors.grey};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > svg {
    margin-top: -30px;
    filter: ${p => p.theme.shadows.logo};
    animation: ${ShowTitleHeader} 500ms 100ms ease backwards;
  }
`

export const NamesOfList = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: ${p => p.theme.sizes.logonTitle};
  line-height: 18px;
  letter-spacing: 0.055em;
  color: ${p => p.theme.colors.text};
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);

  margin: 10px 0px;

  animation: ${ShowTitleHeader} 500ms 500ms ease backwards;
`

export const FormularyContainer = styled.form`
  display: flex;
  margin: 15px 0px;
  padding: 5px;
  flex-direction: column;
  height: fit-content;
  align-items: center;

  animation: ${ShowTitleHeader} 500ms 700ms ease backwards;

  > h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 11pt;
    line-height: 19px;
    letter-spacing: 0.055em;

    color: ${p => p.theme.colors.text};
  }

  > input {
    margin: 5px 0px;
    background: #f6f6f6;
    border: 1px solid #a7abc9;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    padding: 5px;
    line-height: 26px;
    width: 190px;
    text-align: center;
    font-size: 12pt;

    &::placeholder {
      color: #dcdcdc;
    }
  }
`

export const ButtonSubmit = styled.button`
  margin: 8px 0px;
  background: #4ae47d;
  box-shadow: 0px 3px 15px rgba(73, 249, 101, 0.3);
  border-radius: 4px;
  width: 180px;
  padding: 5px;
  height: 40px;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13pt;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.055em;

  &:disabled {
    opacity: 0.6;
  }

  color: #ffffff;
`

export const SupportLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.055em;
  animation: ${ShowTitleHeader} 500ms 750ms ease backwards;

  color: ${p => p.theme.colors.text};
`
