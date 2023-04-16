export const Pagination = ({ onLoad, totalPages, page }) => {
  return (
    <div className="container flex justify-center gap-3">
      <button
        name="first"
        onClick={onLoad}
        className="hover:bg-light-accent-color duration-100 w-10 h-10 rounded"
      >
        1
      </button>
      <button
        name="prev"
        onClick={onLoad}
        className="hover:bg-light-accent-color duration-100 w-10 h-10 rounded"
      >
        prev
      </button>
      <p className="flex items-center justify-center bg-light-accent-color w-10 h-10 rounded">
        {page}
      </p>
      <button
        name="next"
        onClick={onLoad}
        className="hover:bg-light-accent-color duration-100 w-10 h-10 rounded"
      >
        next
      </button>
      <button
        name="last"
        onClick={onLoad}
        className="hover:bg-light-accent-color duration-100 w-10 h-10 rounded"
      >
        {totalPages}
      </button>
    </div>
  );
};
