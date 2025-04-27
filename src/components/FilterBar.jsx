import React from 'react';
import './FilterBar.css'

const FilterBar = ({ filter, setFilter, sortOrder, setSortOrder }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Severity: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Sort by Date: </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
