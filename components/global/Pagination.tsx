import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({ users }: any) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 2;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / 2);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 2) % users.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};

export default Pagination;
