import { useState } from "react";
import "./StudentRow.css";

function StudentRow({ index, student, updateScore }) {
  const [inputScore, setInputScore] = useState(student.score);

  const isPassing = student.score >= 40;

  const handleUpdate = () => {
    if (inputScore === "" || isNaN(inputScore)) return;
    updateScore(student.id, inputScore);
  };

  return (
    <tr className="student-row">
      <td className="index-cell">{index}</td>
      <td className="name-cell">{student.name}</td>
      <td className="score-cell">
        <span className="score-badge">{student.score}</span>
      </td>
      <td>
        <span className={`status-badge ${isPassing ? "pass" : "fail"}`}>
          {isPassing ? "✅ Pass" : "❌ Fail"}
        </span>
      </td>
      <td className="update-cell">
        <input
          type="number"
          className="score-input"
          value={inputScore}
          min="0"
          max="100"
          onChange={(e) => setInputScore(e.target.value)}
        />
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;