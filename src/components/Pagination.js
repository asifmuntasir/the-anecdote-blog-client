import React from 'react';

const Pagination = ({ count, page, perPage }) => {
    if (page === undefined) {
        page = 1;
    }
    let totalPages = Math.ceil(count / perPage);
    let startLoop = page;
    let diff = totalPages - page;
    if (diff <= 4) {
        startLoop = totalPages - 4;
    }
    let endLoop = startLoop + 4;
    if (startLoop <= 0) {
        startLoop = 1;
    }
    return (
        <div className="pagination">

        </div>
    );
};

export default Pagination;