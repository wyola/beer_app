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
