import styled from "styled-components";

export const WrapperStyled = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
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
