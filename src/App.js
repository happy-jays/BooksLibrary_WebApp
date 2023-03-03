import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import PaginationComponent from "./components/PaginationComponent";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const handleSearch = async () => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${searchTerm}&limit=10&offset=${(currentPage - 1) * 10}`
    );
    setSearchResults(response.data.docs);
    setTotalResults(response.data.numFound); // Add this line
    setIsLoading(false);
  } catch (error) {
    console.error(error);
    setIsLoading(false);
  }
};

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSubjectClick = async (subject) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${subject}&limit=10&offset=${(currentPage - 1) * 10}`
      );
      setSearchResults(response.data.docs);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }                                   
  };
  return (
    <div>
    <h1 id="hd1">Books Library App</h1>
    <div className="row">
    <div className="col col1">
      <h3 id="hd2">Popular Subjects:</h3>
      <div className="plr-sbj">
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("mystery")}>Mystery</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("fiction")}>Fiction</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("romance")}>Romance</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("history")}>History</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("sci-fi")}>Sci-Fi</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("arts")}>Arts</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("animals")}>Animals</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("biography")}>Biography</button>
      <button className="plr-sbj-row" onClick={() => handleSubjectClick("places")}>Places</button>
      </div>
    </div>
    <div className="col col2">
    <div className="col2-row1">
      <input id="inpt"
        type="text"
        placeholder="Search by book title or author name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="btn1" onClick={handleSearch}>Search</button>
      <button id="btn2" onClick={handleClearSearch}>Clear</button>
    </div>
    {isLoading && <div>Loading...</div>}
    {searchResults.length > 0 ? (
      <div className="col2-row21">
        <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>First Publish Year</th>
          <th>Latest Publish Year</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((book) => (
          <tr key={book.key}>
            <td>{book.title}</td>
            <td>{book.author_name && book.author_name.join(", ")}</td>
            <td>{book.first_publish_year}</td>
            <td>{book.publish_year && Math.max(...book.publish_year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
        <PaginationComponent
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalResults={totalResults}
          resultsPerPage={10}
        />
      </div>
    ) : (
      <div className="col2-row2">No search results found.</div>
    )}
    </div>
   </div> 
  </div>
  );
}

export default App;
