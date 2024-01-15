# [Live Preview](https://mb-sk.adaptable.app/)


# Message Board Application

A simple and interactive message board application where users can view and post messages. Built with React, TypeScript, and Express, this project showcases a full-stack development approach with a focus on functionality and user experience.

App was made as SPA with React Router, and Express as backend to fetch data from file called db. 

## Technologies Used

- **React & TypeScript**: For building a user-friendly front-end interface.
- **Express**: For backend server functionality.
- **Vite**: For efficient and fast front-end tooling.
- **CSS**: For styling and layout design.
- **TailwindCSS**: For designing a responsive and modern UI with utility-first CSS.
  
## Running the Application Locally

To run this application on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/szymon-kowal/TOP-messageBoard.git
   ```
2. **Install Dependencies**:

   **Warning: You need to do step 2 and 3 in frontend and backend directories, first install dependencies in both files, then run backend and frontend server !**

   Navigate to the project directory and run:
   ```bash
   npm install
   ```

   **Important:** That`s just runs the frontend server and backend app in different browser tabs, if you want to build app, move to step 5.
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   This will start both the React and Express servers.
4. **Open the Application**:

   Access `http://localhost:3000` in your web browser to view the application.

5. **Build the app**:

   If you want to build the app, then you need to run this in frontend dir:
   ```bash
   npm run build
   npm run move
   ```
   Then if you want to see whole app running on server, run in backend dir :
   ```bash
   npm run dev
   ```

## Application Features

- **Message Viewing**: Users can view a list of messages posted.
- **Message Posting**: Interface for posting new messages to the board.
