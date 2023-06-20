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
  
  &:hover {
    border-color: orange;
    /* background-color: #ffa6004b; */
  }
`;

export const Image = styled.img`
  height: 150px;
`;
export const DetailsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const NameStyled = styled.div`
  font-weight: 600;
  color: #979797;
`;

export const TaglineStyled = styled.div`
  color: #979797;
  font-size: 0.8em;
`;
