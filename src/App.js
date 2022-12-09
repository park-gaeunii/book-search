import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: nanumsquare, sans-serif;
`;

const Wrapper = styled.div`
  width: 576px;
  height: 864px;
  background-color: #f6f6f6;
  border-radius: 5px;
  position: relative;
  padding: 25px;
`;

function App() {
  const [reviewData, setReviewData] = useState([]);
  useEffect( () => {
    const savedReviewData = JSON.parse( localStorage.getItem("review") );
    if ( savedReviewData !== null ) {
      setReviewData(savedReviewData);
    }
  }, []);
  const updateData = () => setReviewData( JSON.parse( localStorage.getItem("review") ));

  const [page, setPage] = useState("home");

  return (
    <Router>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home page={page} reviewData={reviewData} updateData={updateData} />} />
            <Route path="/book" element={<Detail reviewData={reviewData} updateData={updateData} setPage={setPage} />} />
          </Routes>
          <Nav page={page} setPage={setPage} />
        </Wrapper>
      </Container>
    </Router>
  );
}

export default App;