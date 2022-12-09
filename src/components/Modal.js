import styled, {css} from "styled-components";
import { useState, useEffect } from "react";
import { Star, Textarea } from "../components/ContentStyles";
import close from "../assets/close.png";
import Button from "../components/ButtonStyles";

const ModalWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(2px);
  ${ (props) => props.open && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const ModalContent = styled.div`
  width: 400px;
  height: 550px;
  background-color: #f6f6f6;
  border-radius: 15px;
  box-shadow: inset 5px 5px 8px rgba(255, 255, 255, 0.5), 5px 5px 6px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
  position: relative;
`;

const CloseButton = styled.button`
  width: 12px;
  height: 12px;
  background-image: url(${close});
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  right: 20px;
  top: 20px;
`;

function Modal({open, close, bookData, reviewData, savedReview, updateData}) {

  const [ star, setStar ] = useState(0);
  const [review, setReview] = useState("");

  useEffect( () => {
    if ( savedReview.length > 0 ) {
      setStar(savedReview[0].star);
      setReview(savedReview[0].review);
    }
  }, [savedReview]);

  const onClick = (index) => setStar(index);
  const onChange = (event) => setReview(event.target.value);

  const saveReview = () => {
    if ( savedReview.length > 0 ) {
      reviewData = reviewData.filter( review => review.id !== bookData.id );
    }
    let data = {
      id: bookData.id,
      title: bookData.title,
      author: bookData.author,
      thumbnail: bookData.thumbnail,
      content: bookData.content,
      star: star,
      review: review
    }
    reviewData.push(data);
    localStorage.setItem( "review", JSON.stringify(reviewData) );
    updateData();
  };

  return (
    <ModalWrapper open={ open? true : false }>
      <ModalContent>
        <CloseButton onClick={close}></CloseButton>
        <Star>
          <button className={ (star > 0)? "check" : "empty" } onClick={() => onClick(1)}></button>
          <button className={ (star > 1)? "check" : "empty" } onClick={() => onClick(2)}></button>
          <button className={ (star > 2)? "check" : "empty" } onClick={() => onClick(3)}></button>
          <button className={ (star > 3)? "check" : "empty" } onClick={() => onClick(4)}></button>
          <button className={ (star > 4)? "check" : "empty" } onClick={() => onClick(5)}></button>
        </Star>
        <Textarea><textarea value={review} onChange={onChange}></textarea></Textarea>
        <Button className="save" margin="20px"
          onClick={() => {
            close();
            saveReview();
        }}>
          저장
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;