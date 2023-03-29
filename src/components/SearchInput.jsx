import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useEffect, useRef, useState } from "react";
import ResultsPage from "./ResultsPage";
import axios from "axios";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const inputRef = useRef(null);

  console.log("filteredData", filteredData);

  console.log("data", data);

  useEffect(() => {
    // It didn't work that way (process.env)
    // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8fceb84aab95d8f1e97b266e1e4d655`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    inputRef.current.focus();
  }, []);

  const handleChange = (event, searchText) => {
    setSearchText(event.target.value);
    searchItems(event, searchText);
  };

  const filteredItems = data?.results?.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const searchItems = (e, searchText) => {
    e.preventDefault();
    console.log("searchText", searchText);
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <Form onSubmit={searchItems}>
        <InputGroup className="mt-5 w-75">
          <Form.Control
            size="lg"
            ref={inputRef}
            value={searchText}
            onChange={handleChange}
            placeholder="Enter a movie name..."
            aria-label="Search for a movie"
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            variant="outline-secondary"
            id="button-addon2"
            size="lg"
          >
            Search
          </Button>
        </InputGroup>
      </Form>

      <ResultsPage
        searchText={searchText}
        setSearchText={setSearchText}
        filteredData={filteredData}
      />
    </div>
  );
};

export default SearchInput;
