import styled from "styled-components";
import Link from "next/link";

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 20px;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: orange;
  }
`;

export const ImageStyled = styled.img`
  height: 150px;
`;

export const DetailsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const NameStyled = styled.div`
  font-weight: 600;
`;

export const TaglineStyled = styled.div`
  font-size: 0.8em;
`;
