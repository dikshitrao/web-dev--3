import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-icon">🎓</span>
        <div>
          <h1 className="header-title">Student Scoreboard</h1>
          <p className="header-subtitle">Track, Update & Manage Student Scores</p>
        </div>
      </div>
    </header>
  );
}

export default Header;