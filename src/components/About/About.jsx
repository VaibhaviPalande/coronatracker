import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">About COVID-19 Tracker</h1>
        <p className="text-muted">Stay updated with real-time COVID-19 data</p>
      </div>

      {/* Introduction */}
      <div className="mb-5">
        <h3 className="fw-semibold">Introduction</h3>
        <p className="text-secondary">
          The COVID-19 Tracker is a real-time web application designed to provide the latest global and country-specific COVID-19 data. 
          It offers an interactive dashboard where users can track active cases, recoveries, and deaths using visual analytics.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-5">
        <h3 className="fw-semibold">Key Features</h3>
        <ul className="list-group">
          <li className="list-group-item">🌍 <strong>Global & Country-Specific Data:</strong> View worldwide cases and compare country-wise statistics.</li>
          <li className="list-group-item">📊 <strong>Interactive Graphs:</strong> Line graphs for global trends and bar charts for country-specific data.</li>
          <li className="list-group-item">📅 <strong>Real-Time Updates:</strong> Fetches live data from trusted APIs.</li>
          <li className="list-group-item">🚀 <strong>Responsive & User-Friendly UI:</strong> Fully optimized for all devices.</li>
        </ul>
      </div>

      {/* Importance Section */}
      <div className="mb-5">
        <h3 className="fw-semibold">Why is this Tracker Important?</h3>
        <p className="text-secondary">
          COVID-19 has impacted lives globally. Having access to accurate and real-time information helps individuals, healthcare professionals, and policymakers make informed decisions.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-5">
        <h3 className="fw-semibold">Technologies Used</h3>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">⚛️ React.js - Interactive UI</li>
              <li className="list-group-item">📈 Chart.js - Data Visualization</li>
              <li className="list-group-item">🎨 Bootstrap - Responsive Styling</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">🔗 Disease.sh API - Real-Time Data</li>
              <li className="list-group-item">📡 Axios - API Fetching</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Safety Measures */}
      <div className="mb-5">
        <h3 className="fw-semibold">Stay Safe & Stay Updated</h3>
        <p className="text-secondary">
          Keep yourself and others safe by following health guidelines:
        </p>
        <ul className="list-group">
          <li className="list-group-item">✅ Wear a mask in crowded places</li>
          <li className="list-group-item">✅ Get vaccinated & boosted</li>
          <li className="list-group-item">✅ Follow social distancing</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <p className="text-muted">Made with ❤️ to keep you informed.</p>
      </div>
    </div>
  );
};

export default About;
