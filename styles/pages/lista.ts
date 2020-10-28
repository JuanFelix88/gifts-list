import styled, { keyframes } from 'styled-components'

const ShowElement = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

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

export const Container = styled.li`
  display: flex;
  width: 100vw;
  flex-direction: column;
`

export const Header = styled.header`
  background-color: ${p => p.theme.colors.yellow};
  width: 100vw;
  height: 70px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.18);

  @media (min-width: 700px) {
    padding: 10px 18%;
  }

  @media (min-width: 1400px) {
    padding-left: 30%;
    padding-right: 30%;
  }

  & > svg {
    filter: ${p => p.theme.shadows.logo};
    color: ${p => p.theme.colors.text};
    height: 38pt;
    animation: ${ShowElement} 450ms 100ms ease backwards;
  }
`

export const NamesOfList = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: ${p => p.theme.sizes.title};
  line-height: 18px;
  letter-spacing: 0.055em;
  margin-left: auto;
  color: ${p => p.theme.colors.text};
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  animation: ${ShowTitleHeader} 850ms 1100ms ease backwards;
`

export const ItemsList = styled.ul`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 20px;
  padding-top: 5px;
  flex-direction: column;
  align-items: center;
  animation: ${ShowElement} 750ms 300ms ease backwards;
  @media (min-width: 700px) {
    padding: 20px 18%;
  }
  @media (min-width: 1400px) {
    padding-left: 30%;
    padding-right: 30%;
  }
  li {
    margin: 5px 0px;
  }
`

export const EmptyItems = styled.div`
  display: flex;
  color: ${p => p.theme.colors.text};
  justify-content: center;
  align-items: center;
  margin: 6px;
  padding: 5px;
  animation: ${ShowElement} 950ms 200ms ease backwards;

  > span {
    font-size: 14pt;
  }
`

export const SubHeaderOptions = styled.div`
  display: flex;
  padding: 15px 20px;
  animation: ${ShowElement} 750ms 500ms ease backwards;
  @media (min-width: 700px) {
    padding: 15px 18%;
  }

  @media (min-width: 1400px) {
    padding-left: 30%;
    padding-right: 30%;
  }

  > h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;

    color: ${p => p.theme.colors.text};
  }

  .previous-button {
    background: #91b3c6;
  }

  > button {
    background: #6a94ff;
    box-shadow: 0px 1px 8px rgba(53, 60, 231, 0.36);
    border-radius: 4px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
    border: none;
    margin-left: auto;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    transition: 0.15s ease;

    :hover {
      opacity: 0.8;
    }

    color: #ffffff;
  }
`
