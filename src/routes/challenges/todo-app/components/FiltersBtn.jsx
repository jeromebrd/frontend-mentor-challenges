import PropTypes from 'prop-types';

const FilterBtn = ({ onClick, filter, children }) => {
  const filterName = children.toLowerCase();
  return (
    <button
      type="button"
      className={`${filter === filterName ? 'text-[#3a7bfd]' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const FiltersBtn = ({ filter, setFilter, className }) => {
  return (
    <div
      className={`text-sm flex items-center gap-8 font-bold lg:justify-evenly ${className} lg:text-lg `}
    >
      <FilterBtn filter={filter} onClick={() => setFilter('all')}>
        All
      </FilterBtn>
      <FilterBtn filter={filter} onClick={() => setFilter('active')}>
        Active
      </FilterBtn>
      <FilterBtn filter={filter} onClick={() => setFilter('completed')}>
        Completed
      </FilterBtn>
    </div>
  );
};

FilterBtn.propTypes = {
  children: PropTypes.string,
  filter: PropTypes.string,
  onClick: PropTypes.func,
};
FiltersBtn.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  className: PropTypes.string,
};

export default FiltersBtn;
