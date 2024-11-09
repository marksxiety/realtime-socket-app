# realtime-socket-app

This application is a real-time communication system built using **Socket.IO** to enable bidirectional event-based communication between clients and a server. The application allows multiple clients to send and receive messages in real-time, with messages dynamically displayed on the frontend.

## Features

- **Real-time Messaging:** Clients can send and receive messages with minimal delay, providing real-time communication.
- **Multiple Clients:** Supports multiple clients communicating with the server.
- **Vue.js Frontend:** Built with **Vue 3** to handle UI updates dynamically.
- **Socket.IO Server:** A server built using **Node.js** and **Socket.IO**, which handles connections, message broadcasting, and client communication.

## Prerequisites

Before running the application, ensure you have the following installed:
*Ensure that Node.js, npm, and Python are properly installed on your machine.*

### 1. **Node.js**
   - Install [Node.js](https://nodejs.org/) (version 14 or higher) to run the backend server and manage dependencies.
   - You can verify your Node.js installation by running:
     ```bash
     node -v
     ```

### 2. **npm (Node Package Manager)**
   - `npm` comes with Node.js and is used to manage project dependencies.
   - Check if npm is installed by running:
     ```bash
     npm -v
     ```

### 3. **Python** (Optional, depending on use case)
   - If the project includes any Python-related tasks (such as data processing or server-side scripts), make sure Python is installed.
   - Download and install Python from [here](https://www.python.org/downloads/).
   - Verify Python installation by running:
     ```bash
     python --version
     ```

### 4. **Python Dependencies**
   - Install the required Python libraries for the application by running:
     ```bash
     pip install python-socketio
     ```
   - **Note:** The `random` and `time` modules are part of the Python standard library and do not need to be installed separately.

   These dependencies are needed for the Python part of the application to establish Socket.IO communication and generate random numbers or handle time-based logic.


## Project Setup

Follow these steps to get the application running locally.

### 1. **Run the Vite App (Frontend)**

To start the Vue.js frontend using Vite:

```bash
# Clone the repository
git clone https://github.com/marksxiety/realtime-socket-app.git

# Navigate into the project directory
cd realtime-socket-app

# Install the dependencies
npm install

# Start the development server
npm run dev

# Build the project for production (optional)
npm run build
```
### 2. **Prepare the Server (Backend)**

```bash
# Navigate into the server directory
cd server

# Install backend dependencies (if not done already)
npm install

# Start the server
node server.js
```

### 3. **Run the Python Script to Publish Data**
```bash
# Navigate into the python directory
cd python

# Install Python dependencies (if not done already)
pip install python-socketio

# Run the Python publisher script
python publisher.py
```

