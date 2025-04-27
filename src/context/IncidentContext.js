import React, { createContext, useState } from 'react';
import { incidents as initialIncidents } from '../data/mockData';

export const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState(initialIncidents);

  const addIncident = (newIncident) => {
    setIncidents((prev) => [...prev, newIncident]);
  };

  return (
    <IncidentContext.Provider value={{ incidents, addIncident }}>
      {children}
    </IncidentContext.Provider>
  );
};
