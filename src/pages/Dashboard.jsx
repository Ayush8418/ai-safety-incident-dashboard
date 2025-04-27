import React, { useState, useContext } from 'react';
// import { incidents as mockIncidents } from '../data/mockData';
import { IncidentContext } from '../context/IncidentContext';
import IncidentList from '../components/IncidentList';
import FilterBar from '../components/FilterBar';
import './Dashboard.css'

const Dashboard = () => {
  const { incidents } = useContext(IncidentContext);
  // const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const filteredIncidents = incidents.filter((incident) =>
    filter === 'All' ? true : incident.severity === filter
  );

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <FilterBar 
        filter={filter} 
        setFilter={setFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
      />
      <IncidentList incidents={sortedIncidents} />
    </div>
  );
};

export default Dashboard;
