import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const Pagination = ({
  productPerPage,
  totalProducts,
  handlePrev,
  handleNext,
  handleJumpTo,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        <GoChevronLeft className="pagination-arrows" />
        {pageNumbers.map((number, index) => (
          <li
            onClick={() => handleJumpTo(number)}
            key={index}
            className="active"
          >
            <span href="#" className="page-numbers">
              {number}
            </span>
          </li>
        ))}
        <GoChevronRight className="pagination-arrows" />
      </ul>
    </nav>
  );
};

export default Pagination;
