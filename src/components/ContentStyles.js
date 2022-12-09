import styled, { css } from "styled-components";
import thumbnail from "../assets/thumbnail.png";
import star_empty from "../assets/star_empty.png";
import star_check from "../assets/star_check.png";

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #ececec;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #d7d7d7;
  }
 
  ${ (props) => props.home && css`
    height: calc(100% - ${props.margin} - ${props.minus});
    margin-top: ${props.margin};
    text-align: left;
    > * {
      display: flex;
      margin-bottom: 60px;
      :last-child {
        margin-bottom: 55px;
      }
    }
  `}
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 145px;
  border-radius: 5px;
  overflow: hidden;
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  &.detail {
    margin: 30px auto;
  }
  ${ (props) => {
    if ( props.url === "" ) {
      return css `background-image: url(${thumbnail})`;
    } else {
      return css `background-image: url(${props.url})`;
    }
  }}
`;

const TextWrapper = styled.div`
  width: calc(100% - 100px);
  padding-left: 20px;
`;

const Title = styled.p`
  font-size: 15px;
  color: #212121;
  font-weight: bold;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled.p`
  font-size: 13px;
  color: #666666;
  font-weight: bold;
  margin-top: 7px;
`;

const Content = styled.p`
  font-size: 13px;
  color: #666666;
  margin-top: 12px;
  line-height: 125%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const Star = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  > * {
    width: 19px;
    height: 18px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 5px;
    :last-child {
      margin-right: 0;
    }
    &.empty {
      background-image: url(${star_empty});
    }
    &.check{
      background-image: url(${star_check});
    }
  }
`;

const Textarea = styled.div`
  width: 100%;
  height: 390px;
  border-radius: 15px;
  border: 1px solid #e6e6e6;
  margin-top: 35px;
  padding: 10px;
  > textarea {
    width: 100%;
    height: 100%;
    padding: 15px;
    resize: none;
    font-size: 13px;
    color: #666666;
    line-height: 180%;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: #ececec;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #d7d7d7;
    }
  }

  ${ (props) => props.detail && css`
    height: 250px;
  `}
`;

export { ScrollWrapper, Thumbnail, TextWrapper, Title, Author, Content, Star, Textarea };