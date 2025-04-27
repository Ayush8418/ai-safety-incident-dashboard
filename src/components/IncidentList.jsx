import React, { useState } from 'react';
import arrow from "../assets/down-arrow.png"
import './IncidentList.css'

const IncidentList = ({ incidents }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <p>No incidents found.</p>
      ) : (
        incidents.map((incident,ind) => (
          <div key={incident.id} className="incident-card" onClick={() => toggleDetails(incident.id)}>
            <div className="incident-header">
              <div className='incident-title'>
                <h3>{ind+1}. {incident.title}</h3>
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="incident-details">
                <p className="incident-severity">Severity: <span className={incident.severity}>{incident.severity}</span></p>
                <p className="incident-date">{new Date(incident.reported_at).toLocaleString()}</p>
              </div>
             
            </div>
            {expandedId === incident.id && (
              <div className="incident-description">
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default IncidentList;
