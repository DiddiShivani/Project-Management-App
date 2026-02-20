# Project Management App

A simple and clean project management app built with **React** and **Tailwind CSS**. This app helps organize your projects and tasks with a cool, dark "Midnight" theme.

## 💡 The "Secret Sauce": No Prop Drilling!

The biggest highlight of this project is how it handles data. Instead of passing information through every single component (a headache called **Prop Drilling**), we use the **React Context API**.



* **Prop Drilling (The Old Way):** If the `App` has data that a small `Task` button needs, you have to pass that data through the `Sidebar`, then the `SelectedProject` component, and finally the `Tasks` list just to reach the button.
* **Context API (Our Way):** I created a "Data Cloud" (the `ProjectContext`). Any component, no matter how deep it is, can just "reach up" and grab the data or functions it needs directly without bothering the components in between.

## ✨ Features

* **Project Management**: Create new projects with a title, description, and due date.
* **Task Lists**: Add multiple tasks to each project.
* **Progress Tracking**: A visual bar shows the percentage of tasks you've completed.
* **Real-time Search**: A search bar in the sidebar lets you find projects instantly.
* **Safety Modals**: Popups confirm before you delete a project and warn you if you leave inputs empty.
* **Midnight Theme**: A dark UI using deep blues, slates, and indigo accents.

## 🛠️ How it's Built

* **React Context**: Centralizes all state and logic in one place.
* **React Portals**: Used to render Modals at the top level of the HTML document.
* **React Refs**: Used to get values from input fields and trigger Modal actions.
* **Tailwind CSS**: Handles all the styling, layout, and dark mode colors.