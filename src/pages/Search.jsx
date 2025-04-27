import React, { useState, useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import IncidentList from '../components/IncidentList';
import './Search.css';  // We’ll style it separately

const Search = () => {
  const { incidents } = useContext(IncidentContext);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredIncidents = incidents.filter((incident) => {
    const lowerQuery = query.toLowerCase();
    return (
      incident.title.toLowerCase().includes(lowerQuery) ||
      incident.description.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="search-container">
      <h1>Search Incidents</h1>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />

      {query && filteredIncidents.length === 0 ? (
        <p>No incidents found for "<strong>{query}</strong>".</p>
      ) : (
        <IncidentList incidents={filteredIncidents} />
      )}
    </div>
  );
};

export default Search;
