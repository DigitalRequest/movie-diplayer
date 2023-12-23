import { useState } from "react";

interface PageProps {
    num: number;
    active: boolean;
    setActive: (value: boolean) => void;
}

const PageButton: React.FC<PageProps> = ({ num, active, setActive }) => {
    const handleClick = () => {
        setActive(true);
    };

    return (
        <li>
            <a
                className={`pagination-link ${
                    active ? "is-current" : undefined
                }`}
                aria-label={`Goto page ${num}`}
                aria-current={active ? "page" : undefined}
                onClick={handleClick}
            >
                {num}
            </a>
        </li>
    );
};

interface PaginationProps {
    length: number;
    setPage: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ length, setPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageStates, setPageStates] = useState<boolean[]>(
        Array.from({ length: length }, (_, index) => index + 1).map((_, idx) => {
            if (idx != 0) {
                return false;
            }else {
                return true;
            }
        })
    );

    const handleSetActive = (index: number) => {
        setPageStates((prevStates) =>
            prevStates.map((_, i) => {
                if (i === index && currentPage - 1 !== i) {
                    setCurrentPage(index + 1); 
                    setPage(index + 1); 
                }
                console.log(i, index, currentPage);
                return i === index; 
            })
        );
    };
    

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list container is-flex is-justify-content-center">
                {pageStates.map((active, index) => (
                    <PageButton
                        key={index}
                        num={index + 1}
                        active={active}
                        setActive={() => handleSetActive(index)}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
