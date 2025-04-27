import React, { useContext, useState } from "react";
// import ReportForm from "../components/ReportForm";
import { IncidentContext } from "../context/IncidentContext";
import { useNavigate } from "react-router-dom";
import './ReportIncident.css';

const ReportIncident = () => {
  const { addIncident } = useContext(IncidentContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    addIncident(newIncident);
    navigate("/dashboard");
  };

  return (
    // <div>
    //   <ReportForm/>
    // </div>
    <div className="report-incident-container">
      <h1>Report New Incident</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit Incident
        </button>
      </form>
    </div>
  );
};

export default ReportIncident;
