// Displays the form used to add new projects
function ProjectForm() {
  return (
    <form>
      {/* Input for project title */}
      <input type="text" placeholder="Project Title" />
      {/* Input for project description */}
      <textarea placeholder="Project Description"></textarea>
      {/* Button to add a project */}
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
