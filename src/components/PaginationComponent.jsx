import React from 'react'
import "../App.css";
function PaginationComponent({currentPage, handlePageChange,totalResults, resultsPerPage,}) 
  {
    const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
    handlePageChange(currentPage - 1);
    }
    };
    
    const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    }
    return pageNumbers;
    };
  return (
    <div>
        <button className ='pc-btn' onClick={handlePrevPage}>Previous</button>
        {/* {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}

        >
        {pageNumber}
        </button>
        ))} */}
        <button className ='pc-btn' onClick={handleNextPage}>Next</button>
      </div>
  )
}

export default PaginationComponent