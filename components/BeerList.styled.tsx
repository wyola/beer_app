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

export const PaginationWrapperStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  font-size: 0.8em;

  > div {
    padding: 5px 10px;
    background-color: orange;
    color: white;
    margin-left: 5px;
    margin-right: 5px;
  }

  > button {
    cursor: pointer;
    background-color: unset;
    border: 1px solid #7e6a9f;
    color: #7e6a9f;
    padding: 5px 10px;

    &:hover {
      background-color: #7e6a9f;
      color: white;
    }

    &:disabled {
      border-color: #e1e1e1;
      color: #e1e1e1;
      background-color: unset;
    }
  }
`;

export const ErrorMessageWrapperStyled = styled.div`
  color: #7e6a9f;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
