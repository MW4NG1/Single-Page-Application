// Import React hook
import { useState } from "react";
// Import application styles
import "./styles/App.css";

// Import components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  // Store all projects
  const [projects, setProjects] = useState([]);
  // Store search text
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app-container">
      {/* App heading */}
      <Header />
      {/* Form for adding projects */}
      <ProjectForm projects={projects} setProjects={setProjects} />
      {/* Search input */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Displays project cards */}
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
