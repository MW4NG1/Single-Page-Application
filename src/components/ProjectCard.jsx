// Displays information for a single project
function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      {/* Project Title */}
      <h3>{title}</h3>
      {/* Project Description */}
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
