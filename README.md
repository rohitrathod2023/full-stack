# Todo App and GitHub Repo Info

This project contains two React applications:

1. **To-Do App**: A simple to-do list where users can add and delete tasks.
2. **GitHub Repository Info**: Allows users to input a GitHub repository's owner and name, fetch and display repository information like stars, forks, issues, etc.

---
![To-Do App Screenshot](/src/assets/to-do.png)
*To-Do App Interface*

![GitHub Repo Info Screenshot](/src/assets/git-repo.png)
*GitHub Repo Info Interface*


## Features

- **To-Do App**:
  - Add new tasks to the list.
  - Delete tasks from the list.
  - Tasks are stored in memory (does not persist after page reload).

- **GitHub Repo Info**:
  - Fetch and display details of a GitHub repository by entering the owner and repository name.
  - Information displayed includes the repository's name, description, stars, forks, open issues, language, and a link to the GitHub page.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Query**: Used for fetching data from the GitHub API in the Repo Info app.
- **Tailwind CSS**: For styling the applications.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohitrathod2023/full-stack.git
   cd full-stack

