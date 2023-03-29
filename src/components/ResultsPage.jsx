import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ResultsPage = ({ filteredData, setSearchText, searchText }) => {
  const [id, setId] = useState(null);

  // console.log("id", id);

  const getDetails = (id) => {
    setId(id);
  };

  // console.log("fileredData", filteredData);

  return (
    <div className="mt-4">
      {searchText !== "" ? <h1>Movies</h1> : ""}

      <div className="d-flex flex-wrap justify-content-start gap-3">
        {searchText !== "" &&
          filteredData.map((movie) => {
            return (
              <Card style={{ width: "16rem", backgroundColor:"darkgray"}}>
                <Card.Img
                  onClick={() => getDetails(movie.id)}
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  {/* <Card.Text>{movie.overview}</Card.Text> */}
                  <Button
                    onClick={() => getDetails(movie.id)}
                    variant="primary"
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <div className="mt-3">
      <MovieDetails
        searchText={searchText}
        setSearchText={setSearchText}
        setId={setId}
        id={id}
      />
     </div>
    </div>
  );
};

export default ResultsPage;
