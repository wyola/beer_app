import styled from "styled-components";

export const PaginationWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px 20px 20px;
  justify-content: space-between;
  font-size: 0.8em;
`;

export const SelectWrapperStyled = styled.div`
  color: #7e6a9f;

  > label {
    margin-right: 10px;
  }

  > select {
    padding: 5px 10px;
    border: 1px solid #7e6a9f;
    color: inherit;
  }
`;

export const PageSwitchStyled = styled.div`
  display: flex;

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
