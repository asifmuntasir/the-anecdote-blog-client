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
            store.push(<li className={i == page ? 'active' : ''}>
                <Link to={`/dashboard/${i}`}>{i}</Link>
            </li>)
        }
        return store;
    }

    const next = () => {
        if (page < totalPages) {
            return (<li>
                <Link to={`/dashboard/${parseInt(page) + 1}`}>
                    <i class="ri-arrow-right-s-line"></i>
                </Link>
            </li>)
        }
    }

    const previous = () => {
        if (page > 1) {
            return (<li>
                <Link to={`/dashboard/${parseInt(page) - 1}`}>
                    <i class="ri-arrow-left-s-line"></i>
                </Link>
            </li>)
        }
    }

    return totalPages ? (
        <div className="pagination">
            {previous()}
            {links()}
            {next()}
        </div>
    ) : ('');
};

export default Pagination;