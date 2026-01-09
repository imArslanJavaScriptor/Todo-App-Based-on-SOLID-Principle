# Todo App – SOLID Principles Demo with React + Vite + Tailwind CSS

A modern, fully-featured Todo application built to demonstrate the **SOLID principles** in a real-world React project while delivering a clean, responsive, and user-friendly experience.

## Features

- Add, edit (double-click to edit), complete, and delete todos
- Filter todos: **All / Active / Completed**
- Clear completed todos in one click
- Persistent storage using **localStorage** (data survives page reloads)
- Dark / Light mode toggle with persistence
- Beautiful, modern UI powered by **Tailwind CSS**
- Responsive design that works on desktop and mobile
- Built with clean architecture following **SOLID principles**

## SOLID Principles in Action

This project is intentionally structured to showcase the five SOLID principles:

- **Single Responsibility Principle (SRP)** – Each component and service has one clear responsibility (e.g., `TodoInput`, `TodoList`, `TodoService`).
- **Open-Closed Principle (OCP)** – Easy to extend (new filters, themes, or storage backends) without modifying existing code.
- **Liskov Substitution Principle (LSP)** – Components are interchangeable (e.g., a specialized `TodoItem` could replace the default one).
- **Interface Segregation Principle (ISP)** – Components receive only the props and dependencies they need.
- **Dependency Inversion Principle (DIP)** – High-level modules depend on abstractions (e.g., `TodoService` is injectable and swappable).

## Tech Stack

- **React 18** (with Hooks)
- **Vite** – Fast development server and build tool
- **Tailwind CSS** – Utility-first styling for rapid, maintainable UI development
- **ESLint** – Enforces code quality and best practices

## Project Structure
