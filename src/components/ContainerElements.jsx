import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding-top: ${(props) => props.theme.spacing.regular};
  display: grid;
  grid-template-columns: 15% 1fr 15%;

  & > :nth-child(1) {
    place-self: center;
  }

  & > :nth-child(2) {
    display: flex;
    gap: ${(props) => props.theme.spacing.regular};
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
