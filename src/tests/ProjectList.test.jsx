// Testing tools
import { render, screen } from "@testing-library/react";
// Component being tested
import ProjectList from "../components/ProjectList";
// Test rendering multiple projects
test("renders all projects", () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Built using React",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Uses an API",
    },
  ];

  render(<ProjectList projects={projects} />);
  expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
  expect(screen.getByText("Weather App")).toBeInTheDocument();
});
