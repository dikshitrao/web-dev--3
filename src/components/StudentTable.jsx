import StudentRow from "./StudentRow";
import "./StudentTable.css";

function StudentTable({ students, updateScore }) {
  return (
    <section className="table-section">
      <h2 className="section-title">📋 Student Records</h2>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update Score</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                index={index + 1}
                student={student}
                updateScore={updateScore}
              />
            ))}
          </tbody>
        </table>
        {students.length === 0 && (
          <p className="no-students">No students added yet.</p>
        )}
      </div>
    </section>
  );
}

export default StudentTable;