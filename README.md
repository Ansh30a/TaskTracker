# Personal Task Tracker

## 📖 Description
A modern, responsive personal task management application built with React. This application allows users to manage their daily tasks with an intuitive interface featuring a beautiful gradient background and smooth animations.

## 🚀 Features
- **Simple Login System**: Username-based authentication with localStorage persistence
- **Task Management**: Add, edit, delete, and toggle task completion status
- **Task Filtering**: Filter tasks by All, Completed, or Pending with live counts
- **Data Persistence**: All tasks and user data persist using localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient background with glassmorphism effects
- **Real-time Updates**: Task counts and filters update automatically
- **Confirmation Dialogs**: Safe deletion with confirmation prompts
- **Inline Editing**: Edit tasks through modal interface
- **Date Tracking**: Shows creation timestamps for all tasks

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧰 Technologies Used
- **React.js** - Frontend framework with hooks
- **CSS3** - Modern styling with gradients and animations
- **localStorage** - Data persistence
- **ES6+** - Modern JavaScript features

## 📁 Project Structure
```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── TaskForm.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── TaskFilter.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── README.md
└── package.json
```

## 🎯 Core Features Implementation

### Authentication
- Simple username-based login
- User data stored in localStorage
- Automatic session restoration on page refresh

### Task Management
- **Add Tasks**: Create tasks with title (required) and optional description
- **Edit Tasks**: Modify existing tasks through modal interface
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Toggle Status**: Mark tasks as completed or pending

### Filtering & Display
- **All Tasks**: View complete task list
- **Completed**: Show only finished tasks
- **Pending**: Display incomplete tasks
- **Live Counts**: Real-time task count updates

### Data Persistence
- All user data and tasks stored in localStorage
- Automatic save on every change
- Data survives page refreshes and browser sessions

## 🎨 UI/UX Features
- **Modern Design**: Gradient backgrounds with glassmorphism effects
- **Responsive Layout**: Adapts to all screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Intuitive Controls**: Clear visual feedback for all interactions
- **Accessibility**: Proper labels and keyboard navigation

## 🧪 Sample Usage
1. Enter any username on the login screen
2. Click "Login" to access the task dashboard
3. Use "+ Add Task" to create new tasks
4. Click the circle/checkmark to toggle task completion
5. Use the edit button (✎) to modify tasks
6. Use the menu button (≡) to delete tasks
7. Filter tasks using the All/Completed/Pending tabs

## 🔗 Live Demo
[Add your deployed URL here]

## 🖼 Screenshots
[Include screenshots of login screen and task dashboard]

## 📝 Development Notes
- Built using React functional components with hooks
- No external state management libraries used
- Follows React best practices for component organization
- Implements proper error handling and edge cases
- Uses modern CSS features for styling

## 🚀 Deployment
The application can be deployed to:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use gh-pages package

Build the project for production:
```bash
npm run build
```

## 🔧 Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🐛 Known Issues
None currently identified. Please report any bugs or issues.

## 🤝 Contributing
This is an intern assignment project. For improvements or suggestions, please create an issue or pull request.

## 📄 License
This project is created for educational purposes as part of an internship assignment.