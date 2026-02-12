# Programmers Planning App

A React-based task planning application designed for development teams. This app allows users to manage a list of programmers and calculate if they can handle a specific workload within a given timeframe.

## 🛠 Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Key Features

- **Programmer Management:** Add or remove team members. Each person is categorized as either a _Junior_ or _Senior_.
- **Smart Planning Logic:**
  - Calculates team capacity: Junior (100 lines/day), Senior (200 lines/day).
  - Real-time validation: The planning button remains disabled and red if the team cannot meet the deadline. Once the conditions are met, the button unlocks and turns green.
- **React Implementation:**
  - State management using `useState`.
  - Side effects and synchronization handled by `useEffect`.
- **Single Page Feel:** Smooth switching between the "Programmers" list and the "Tasks" planner.

## 🧮 How the Logic Works

The application uses a calculation to determine feasibility:

- **Total Capacity** = (Juniors × 100 + Seniors × 200) × Days.
- If **Total Capacity** ≥ **Required Lines of Code**, the plan is approved.

## ⚙️ Installation & Local Development

1. `git clone https://github.com/KrejcovaKarolina/Programatori.git`
2. `npm install`
3. `npm start`
