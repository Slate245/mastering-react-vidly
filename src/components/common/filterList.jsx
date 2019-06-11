import React from "react";

const FilterList = props => {
  const { filters, currentFilter, onFilterChange } = props;
  return (
    <div className="list-group">
      {filters.map(filter => (
        <button
          key={filter._id}
          type="button"
          className={
            filter._id === currentFilter._id
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onFilterChange(filter)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterList;
