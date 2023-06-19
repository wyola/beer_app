import styled from "styled-components";

export const Separator = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;

  ::before {
    content: " ";
    height: 1px;
    background-color: #979797;
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ::after {
    content: " ";
    display: block;
    background-color: black;
    position: absolute;
    outline: 3px solid white;
    width: 5px;
    height: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
