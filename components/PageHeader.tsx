import styled from "styled-components";

export const PageHeader = styled.h1`
  position: relative;
  overflow: hidden;
  text-align: center;
  color: orange;
  padding: 70px;
  margin: 0;
  font-size: 3em;

  ::before {
    position: absolute;
    background: linear-gradient(45deg, #7e6a9f, #7e90b4);
    content: "";
    top: 0;
    right: -10%;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: rotate(-2deg);
    transform-origin: bottom left;
  }
`;
