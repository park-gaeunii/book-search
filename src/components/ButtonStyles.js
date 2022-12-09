import styled, { css } from "styled-components";
import searchIcon from "../assets/search.png";

const Button = styled.button`
  width: ${(props) => props.width || "42px"};
  height: 24px;
  font-size: 12px;
  color: #666666;
  border-radius: 12px;
  background-color: #f6f6f6;
  float: right;
  margin-top: ${(props) => props.margin};
  margin-right: 5px;
  box-shadow: -3px -3px 3px rgba(255, 255, 255, 0.5), 1px 1px 5px rgba(0, 0, 0, 0.1);
  &:active { box-shadow: -3px -3px 3px rgba(255, 255, 255, 0.5), 1px 1px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -3px -3px 4px rgba(255, 255, 255, 0.5)}
  &.save {
    float: none;
  }
  ${(props) => props.search && css`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: url(${searchIcon});
    background-size: 17px 17px;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    bottom: 10px;
  `}
`;

export default Button;