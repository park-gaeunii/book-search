import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScrollWrapper, Thumbnail, Title, Author, Content, Star, Textarea } from "../components/ContentStyles";
import Button from "../components/ButtonStyles";
import Modal from "../components/Modal";

function Detail({reviewData, updateData, setPage}) {
  useEffect( () => {
    setPage("detail");
  }, [setPage]);
  
  const location = useLocation();
  const bookData = {
    id: location.state.id,
    title: location.state.title,
    author: location.state.author,
    thumbnail: location.state.thumbnail,
    content: location.state.content
  }

  const [modal, setModal] = useState(false);
  const onClick = () => setModal(true);
  const close = () => setModal(false);

  // 현재 도서에 저장한 리뷰, 있으면 true
  const [ savedReview, setSavedReview ] = useState([]);
  const [ reviewCheck, setReviewCheck ] = useState(false);
  useEffect( () => {
    setSavedReview( reviewData.filter( review => review.id === bookData.id ));
  }, [reviewData, bookData.id]);
  useEffect( () => {
    if ( savedReview.length > 0 ) {
      setReviewCheck(true);
    }
  }, [savedReview]);

  const changeData = () => {
    setSavedReview( JSON.parse( localStorage.getItem("review") ).filter( review => review.id === bookData.id ));
    updateData();
  };

  return (
    <ScrollWrapper>
      <Title>{ bookData.title }</Title>
      <Author>{ bookData.author }</Author>
      <Thumbnail className="detail" url={ bookData.thumbnail }></Thumbnail>
      <Content>{ bookData.content }</Content>
      
      { reviewCheck? (
        <div>
          <Star>
            <div className={ (savedReview[0].star > 0)? "check" : "empty" }></div>
            <div className={ (savedReview[0].star > 1)? "check" : "empty" }></div>
            <div className={ (savedReview[0].star > 2)? "check" : "empty" }></div>
            <div className={ (savedReview[0].star > 3)? "check" : "empty" }></div>
            <div className={ (savedReview[0].star > 4)? "check" : "empty" }></div>
          </Star>
          <Textarea detail><textarea value={savedReview[0].review} disabled></textarea></Textarea>
        </div>
      ) : null }

      <Button onClick={onClick} margin={reviewCheck? "20px" : "35px"} width={reviewCheck? "42px" : "80px"}>{ reviewCheck? "수정" : "리뷰 남기기"}</Button>

      <Modal open={modal} close={close} bookData={bookData} reviewData={reviewData} savedReview={savedReview} updateData={changeData} />
    </ScrollWrapper>
  );
}

export default Detail;