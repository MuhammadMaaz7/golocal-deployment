
# GoLocal Guide

GoLocal Guide is a local tourism management system built using the MERN (MongoDB, Express, React, Node.js) stack. It allows tourists to discover destinations, connect with guides, and make reservations at local businesses.

## Features

- Destination discovery
- Guide connections
- Local business listings (hotels/restaurants)
- Reservation system
- Modular panels: Tourist, Guide, Business

---

## Local Development (Node.js)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/golocal-guide.git
   cd golocal-guide
   ```

2. **Install dependencies**
   ```bash
   npm install            # for root (server)
   cd client && npm install  # for frontend
   ```

3. **Configure environment**
   Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

---

---

## Available Scripts

| Command            | Description                           |
|--------------------|---------------------------------------|
| `npm run dev`      | Run frontend and backend concurrently |
| `npm run server`   | Run only the backend server           |
| `npm run client`   | Run only the frontend client          |

---

## Kubernetes Deployment (Minikube)

### Prerequisites

- Docker
- Minikube
- kubectl
- A self-hosted GitHub Actions runner (if automating deployment)

### Build Docker Image

If you're using Minikube for building:

```bash
eval $(minikube docker-env)
docker build -t your-dockerhub-username/golocal-app:latest .
```

Or push to Docker Hub if using remote images:

```bash
docker push your-dockerhub-username/golocal-app:latest
```

### Deploy with Kubernetes

1. Create a namespace:

```bash
kubectl create namespace golocal
```

2. Apply Kubernetes manifests:

```bash
kubectl apply -f deployment/backend-deployment.yaml.yaml -n golocal
kubectl apply -f deployment/backend-service.yaml.yaml -n golocal
kubectl apply -f deployment/frontend-deployment.yaml.yaml -n golocal
kubectl apply -f deployment/frontend-service.yaml.yaml -n golocal
```

### Access the App

Run the following command to open the app in a browser:

```bash
minikube service frontend-service -n golocal
```

> Note: If you're using Docker as your Minikube driver on Windows, it may open a tunnel (e.g., http://127.0.0.1:59870). Keep the terminal open to maintain access.

---