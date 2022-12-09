import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/ButtonStyles";
import { ScrollWrapper } from "../components/ContentStyles";
import List from "../components/List";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid #e1e1e1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 10px 45px 10px 10px;
  font-size: 15px;
  color: #212121;
  ::placeholder { color: #999999; }
`;

const Total = styled.p`
  color: #666666;
  font-size: 13px;
  font-weight: bold;
`;

let saveKeyword = "";
let saveBooks = [];

function Home({page, reviewData, updateData}) {
  const [keyword, setKeyword] = useState(saveKeyword);
  const [books, setBooks] = useState(saveBooks);
  const [pageCheck, setPageCheck ] = useState(true);
  useEffect( () => {
    (page === "home") ? setPageCheck(true) : setPageCheck(false);
  }, [page]);

  const onChange = (event) => setKeyword(event.target.value);
  const onKeyPress = (event) => {
    if ( event.key === "Enter" ) onClick();
  }
  const onClick = () => {
    if ( keyword.replace(/ /gi,"").length > 0) {
      getBooks(keyword);
      saveKeyword = keyword;
    }
  }
      
  const getBooks = async (keyword) => {
    const json = await (
      await fetch(`https://dapi.kakao.com/v3/search/book?query=${keyword}`, {
        "headers": {
          "Authorization": "KakaoAK 4cb878daf5e8581dbf29f4b3f99e84e2"
        }
      })
    ).json();
    setBooks(json.documents);
    saveBooks = json.documents;
  };

  const deleteReview = (event, id) => {
    event.preventDefault();
    reviewData = reviewData.filter( review => review.id !== id );
    localStorage.setItem( "review", JSON.stringify(reviewData) );
    updateData();
  }

  return (
    <ContentWrapper>
      { pageCheck ? (
        <SearchWrapper>
          <SearchInput type="text" placeholder="검색어를 입력하세요" value={keyword} onChange={onChange} onKeyPress={onKeyPress} />
          <Button search onClick={onClick}></Button>
        </SearchWrapper>
      ) : <Total>TOTAL: {reviewData.length}</Total> }
      <ScrollWrapper margin={pageCheck ? "65px" : "25px"} minus={pageCheck ? "56px" : "13px"} home>
        { pageCheck ? (
          books.map( (book) => (
            <List
              key={book.isbn}
              id={book.isbn}
              title={book.title}
              author={book.authors.join(", ")}
              content={book.contents}
              thumbnail={book.thumbnail}
              erasable={false}
            />
          ))
        ) : (
          reviewData.map( (review) => (
            <List
              key={review.id}
              id={review.id}
              title={review.title}
              author={review.author}
              content={review.content}
              thumbnail={review.thumbnail}
              erasable={true}
              deleteReview={deleteReview}
            />
          ))
        )}
      </ScrollWrapper>
    </ContentWrapper>
  );
}

export default Home;