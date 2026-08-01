# Portfolio Platform

## Project Overview

Portfolio Platform is a Single Page Application built with React that allows users to showcase projects, add new projects, and search through existing projects without refreshing the page.

## Problem Statement

Creative agencies need a simple and efficient way to showcase their work online. Updating portfolios manually can be time-consuming, and users need a responsive platform that allows projects to be displayed dynamically.

## Solution

The project provides an interactive portfolio platform where users can:
- View a list of projects
- Add new projects dynamically
- Search for projects by title
- View project information in organized project cards
- Interact with the application without page refreshes

## Project Structure

The project consists of the following files and folders:
- App.jsx which manages the application state and component rendering.
- Components folder which contains reusable React components:
  - Header.jsx
  - ProjectForm.jsx
  - SearchBar.jsx
  - ProjectList.jsx
  - ProjectCard.jsx
- styles folder which contains application styling.
- tests folder which contains component tests.
- setupTests.js which configures React Testing Library.
- main.jsx which renders the application.

## Technologies Used

- React for building the user interface
- Vite for project setup and development
- JavaScript which is jsx in this case for application logic
- CSS for styling and responsiveness
- Vitest for unit testing
- React Testing Library for component testing

## How It Works

1. The user enters a project title.
2. The user enters a project description.
3. The user clicks the "Add Project button".
4. The application adds the project to the project list.
5. The user can search for projects using the search bar.
6. The displayed projects update automatically based on the search term.

## Responsiveness

The application uses CSS styling and responsive layouts to provide a user-friendly experience within different screen sizes.

## Testing

The application includes unit tests for:
- ProjectCard component rendering
- ProjectList component rendering
- ProjectForm submission functionality
All tests were implemented using Vitest and React Testing Library.

## Known Issues

- Projects are stored in component state and are not saved after a page refresh.
- Search functionality currently filters projects by title only.

## Future Improvements

- Store projects using Local Storage.
- Allow project editing functionality.
- Allow project deletion functionality.
- Add project images.
- Implement project categories and filtering options.

## Author

Developed by Mwangi Michael for the React Single Page Application Summative Lab.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Install project dependencies:
4. Start the development server:
5. Open the provided localhost link in your browser.

## Conclusion

This project demonstrates the use of React to build a dynamic Single Page Application that allows users to manage and showcase projects efficiently.
