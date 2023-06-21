import Link from "next/link";
import styled from "styled-components";

type LinkStyledProps = {
  href: string;
  label: string;
};

const LinkButtonStyled = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #7e6a9f;
  color: #7e6a9f;
  font-size: 1.5em;
  display: inline-block;

  &:hover {
    background-color: #7e6a9f;
    color: white;
  }
`;

export const LinkButton = ({ href, label }: LinkStyledProps) => {
  return <LinkButtonStyled href={href}>{label}</LinkButtonStyled>;
};
