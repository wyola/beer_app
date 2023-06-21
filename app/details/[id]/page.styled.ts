import styled from "styled-components";
import Link from "next/link";

export const BeerPageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

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
  flex: 1;
  align-self: stretch;
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

export const LinkWrapperStyled = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #7e6a9f;
  color: #7e6a9f;
  font-size: 1.5em;

  &:hover {
    background-color: #7e6a9f;
    color: white;
  }
`;
