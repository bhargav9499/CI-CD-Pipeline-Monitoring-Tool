
# CI/CD Pipeline Monitoring Tool

## Project Purpose
This project aims to provide an efficient and user-friendly way to monitor Continuous Integration and Continuous Deployment (CI/CD) workflows. It integrates GitHub Actions with a FastAPI backend and an Angular frontend, allowing developers and teams to easily track the status of their deployments, tests, and automated tasks directly through a unified interface.

## Technologies Used

### Backend
- **Python** (FastAPI framework)
- **Pydantic** for data validation
- **Uvicorn** as the ASGI server

### Frontend
- **Angular** framework
- **Angular Material** for UI components
- **TypeScript**

### CI/CD
- **GitHub Actions** for workflow automation

## Installation and Setup

### Backend
Navigate to the backend folder and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

Run the backend server using FastAPI:

```bash
uvicorn backend:app --reload
```

### Frontend
Navigate to the frontend folder and install dependencies:

```bash
cd frontend/cicd-monitoring
npm install
```

Run the frontend application:

```bash
ng serve --open
```

## Project Structure
```
CI-CD-Pipeline-Monitoring-Tool/
├── backend/
│   ├── backend.py
│   ├── requirements.txt
├── frontend/
│   ├── cicd-monitoring/
│   │   ├── src/
│   │   ├── package.json
│   │   ├── angular.json
│   │   └── tsconfig.json
│   ├── requirements.txt
└── README.md
```

## Usage
- Monitor GitHub Actions workflows.
- View detailed status, logs, and artifacts directly from the dashboard.

## Contributing
Feel free to fork this project, submit pull requests, or open issues to enhance functionality.

## Author
- **Bhargav** - [GitHub](https://github.com/bhargav9499)
