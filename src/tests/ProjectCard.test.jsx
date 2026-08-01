// Testing tools
import { render, screen } from "@testing-library/react";
// Component being tested
import ProjectCard from "../components/ProjectCard";
// Test project card rendering
test("renders project title and description", () => {
  render(
    <ProjectCard title="Portfolio Website" description="Built using React" />,
  );

  expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
  expect(screen.getByText("Built using React")).toBeInTheDocument();
});
