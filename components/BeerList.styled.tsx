import styled from "styled-components";

export const BeerListWrapperStyled = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ErrorMessageWrapperStyled = styled.div`
  color: #7e6a9f;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
