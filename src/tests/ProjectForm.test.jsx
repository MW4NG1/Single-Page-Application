// Testing tools
import { render, screen, fireEvent } from "@testing-library/react";
// Component being tested
import ProjectForm from "../components/ProjectForm";

// Test form submission
test("allows a user to submit a project", () => {
  // Mock state updater function
  const setProjects = vi.fn();
  render(<ProjectForm projects={[]} setProjects={setProjects} />);
  // Enter project title
  fireEvent.change(screen.getByPlaceholderText("Project Title"), {
    target: {
      value: "Portfolio Website",
    },
  });

  // Enter project description
  fireEvent.change(screen.getByPlaceholderText("Project Description"), {
    target: {
      value: "Built using React",
    },
  });
  // Submit the form
  fireEvent.click(screen.getByText("Add Project"));
  // Verify state update was called
  expect(setProjects).toHaveBeenCalled();
});
