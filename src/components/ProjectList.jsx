// Import the ProjectCard component
import ProjectCard from "./ProjectCard";

// Displays a list of projects
function ProjectList({ projects }) {
  return (
    <div>
      {/* Loop through all projects */}
      {projects.map(function (project) {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
