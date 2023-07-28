import { useState } from "react"

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(currentPage)

  let pageNumbers = []

  const handleFirstPageButtonClick = () => {
    setCurrentPageNumber(currentPageNumber - 1)
    onPageChange(currentPageNumber - 1)
  }

  const handleNextPageButtonClick = () => {
    setCurrentPageNumber(currentPageNumber + 1)
    onPageChange(currentPageNumber + 1)
  }

  const handleNumberButtonClick = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
    onPageChange(pageNumber)
  }

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else if (currentPageNumber <= 3) {
    pageNumbers = [1, 2, 3, "...", totalPages - 1, totalPages]
  } else if (currentPageNumber >= totalPages - 2) {
    pageNumbers = [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  } else {
    pageNumbers = [1, 2, currentPageNumber, "...", totalPages - 1, totalPages]
  }

  return (
    <div className="mt-4 flex w-full justify-end space-x-2">
      <button
        className={`${
          currentPage === 1
            ? "cursor-not-allowed rounded-full bg-gray-400 text-white"
            : "cursor-pointer rounded-full bg-[#062A55] text-gray-300"
        } inline-flex h-6 w-6 items-center justify-center leading-none`}
        onClick={handleFirstPageButtonClick}
        disabled={currentPageNumber === 1}
      >
        <svg
          className="w-4"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {pageNumbers.map((number) =>
        number === "..." ? (
          <span key={number}>{number}</span>
        ) : (
          <button
            className={`${
              currentPage === number
                ? "cursor-not-allowed bg-[#062A55] text-white"
                : "cursor-pointer text-gray-600"
            } cur inline-flex h-6 w-6 items-center justify-center rounded-full text-xs leading-none hover:border hover:border-[#062A55]/80`}
            key={number}
            onClick={() => handleNumberButtonClick(number)}
            disabled={number === currentPageNumber}
          >
            {number}
          </button>
        )
      )}

      <button
        className={`${
          currentPage === totalPages
            ? "cursor-not-allowed rounded-full bg-gray-400 text-white"
            : "cursor-pointer rounded-full bg-[#062A55] text-gray-300  hover:border-gray-200 hover:shadow hover:dark:border-gray-600"
        } inline-flex h-6 w-6  items-center justify-center leading-none`}
        onClick={handleNextPageButtonClick}
        disabled={currentPageNumber === totalPages}
      >
        <svg
          className="w-4"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default Pagination
