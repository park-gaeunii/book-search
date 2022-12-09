import { Thumbnail, TextWrapper, Title, Author, Content } from "../components/ContentStyles";
import { Link } from "react-router-dom";
import Button from "../components/ButtonStyles";

function List({id, title, author, content, thumbnail, erasable, deleteReview}) {
  return (
    <Link
      to="/book"
      state={{
        id: id,
        title: title,
        author: author,
        content: content,
        thumbnail: thumbnail
      }} 
    >
      <Thumbnail url={ thumbnail }></Thumbnail>
      <TextWrapper>
        <Title>{ title }</Title>
        <Author>{ author }</Author>
        <Content>{ content }</Content>
      </TextWrapper>
      {erasable ? <Button onClick={(event) => deleteReview(event, id)}>삭제</Button> : null}
    </Link>
  );
}

export default List;