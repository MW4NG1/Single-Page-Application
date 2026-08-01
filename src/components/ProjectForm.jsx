// Import React hook
import { useState } from "react";

// Displays the form used to add new projects
function ProjectForm({ projects, setProjects }) {
  // Store project title
  const [title, setTitle] = useState("");
  // Store project description
  const [description, setDescription] = useState("");
  // Runs when the form is submitted
  function handleSubmit(event) {
    // Prevent page refresh
    event.preventDefault();
    // Don't allow empty projects
    if (!title || !description) {
      return;
    }
    // Create a new project object
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
    };
    // Add new project to existing projects
    setProjects([...projects, newProject]);
    // Clear the form
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for project title */}
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {/* Input for project description */}
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      {/* Button to add a project */}
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
