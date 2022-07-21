import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ count, page, perPage }) => {
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

    const links = () => {
        const store = [];
        for (let i = startLoop; i <= endLoop; i++) {
            store.push(<li>
                <Link to={`/dashboard/${i}`}>{i}</Link>
            </li>)
        }
        return store;
    }

    return (
        <div className="pagination">
            {links()}
        </div>
    );
};

export default Pagination;