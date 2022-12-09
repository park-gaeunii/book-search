import styled from "styled-components";
import { Link } from "react-router-dom";
import listIcon from "../assets/list.png";
import reviewIcon from "../assets/review.png";

const Navigation = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 25px;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f6f6f6;
  box-shadow: -3px -3px 3px rgba(255, 255, 255, 0.5), 1px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > * {
    width: 23px;
    height: 22px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${listIcon});
    :last-child {
      background-image: url(${reviewIcon});
    }
    &.active {
      opacity: 1;
    }
    &.disabled {
      opacity: 0.25;
    }
  }
`;

function Nav({page, setPage}) {
  return (
    <Navigation>
      <Link to="/" className={ (page === "home") ? "active" : "disabled" } onClick={() => setPage("home")}></Link>
      <Link to="/" className={ (page === "review")? "active" : "disabled"} onClick={() => setPage("review")}></Link>
    </Navigation>
  );
}

export default Nav;