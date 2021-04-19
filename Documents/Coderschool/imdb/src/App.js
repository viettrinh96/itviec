import "./App.css";
import Navbar from "./components/NavBar";
import MenuBar from "./components/MenuBar";
import ItemList from "./components/ItemList";
import PaginationBar from "./components/Pagination";
import FormControl from "./components/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

const REACT_SECRET_CODE = `e3c21e7780fb28bf4c8e8e1844534bf6`;
const API_KEY = REACT_SECRET_CODE;
console.log(API_KEY);
function App() {
  const [itemList, setItemList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [sortBy, setSortBy] = useState(true);
  const [searchInput, setSearchInput] = useState(``);
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`;
    console.log("url?", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("yeahhh", data);
      setItemList(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log("ssss", sortBy);
    fetchData();
  }, [pageNum, sortBy]);

  console.log(itemList);
  console.log(sortBy);
  return (
    <div>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Container fluid>
        <Row>
          <Col sm={2} className="change-col-left">
            <MenuBar itemList={itemList} />
          </Col>
          <Col sm={10} className="change-col-right">
            <div className="mt-3 mb-4 ml-4 d-flex change-popular">
              <FormControl setSortBy={setSortBy} />
              <PaginationBar
                pageNum={pageNum}
                setPageNum={setPageNum}
                totalPageNum={itemList.total_pages}
              />
            </div>
            <ItemList itemList={itemList} sortBy={sortBy} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
