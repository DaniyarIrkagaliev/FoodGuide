import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Pages = observer(() => {
    const {restaurant} = useContext(Context)
    const pageCount = Math.ceil(restaurant.totalCount / restaurant.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <nav aria-label="Page navigation ">
            <ul className="pagination">
                {pages.map(page =>
                    <li className="page-item">
                        <a className="page-link" key={page}
                           active={restaurant.page === page}
                           onClick={() => restaurant.setPage(page)}>{page} </a></li>
                )}

            </ul>
        </nav>
    );
});

export default Pages;