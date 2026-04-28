import { useState } from "react";
import "./AddStudentForm.css";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a student name.");
      return;
    }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Please enter a valid score between 0 and 100.");
      return;
    }

    addStudent(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <section className="form-section">
      <h2 className="section-title">➕ Add New Student</h2>
      <div className="form-body">
        {error && <p className="error-msg">{error}</p>}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              placeholder="e.g. Rahul Verma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="student-score">Score (0 – 100)</label>
            <input
              id="student-score"
              type="number"
              placeholder="e.g. 75"
              value={score}
              min="0"
              max="100"
              onChange={(e) => setScore(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group btn-group">
            <button className="add-btn" onClick={handleSubmit}>
              Add Student
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddStudentForm;