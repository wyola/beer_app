import styled from "styled-components";

export const PageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  gap: 40px;
  color: #979797;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const ImageStyled = styled.img`
  height: 350px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 20px 50px;
  width: fit-content;
`;

export const DescriptionWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > h2 {
    font-weight: 600;
    font-size: 1.5em;
    margin: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > h3 {
    margin: 0 0 10px 0;
    font-weight: 600;
  }
`;
