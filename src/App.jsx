import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 78 },
  { id: 2, name: "Priya Mehta", score: 35 },
  { id: 3, name: "Rohan Gupta", score: 55 },
  { id: 4, name: "Sneha Patel", score: 22 },
  { id: 5, name: "Karan Singh", score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <StudentTable students={students} updateScore={updateScore} />
        <AddStudentForm addStudent={addStudent} />
      </main>
    </div>
  );
}

export default App;