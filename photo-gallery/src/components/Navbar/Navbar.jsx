import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Logo</h1>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
      </ul>
    </nav>
  );
}
