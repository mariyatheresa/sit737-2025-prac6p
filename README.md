# Calculator Microservice

This is a simple Node.js-based calculator microservice with logging using Winston. It performs basic arithmetic operations and is containerized using Docker and deployed to a Kubernetes cluster.

## 🧮 Features

- Add, subtract, multiply, and divide endpoints
- Logging with Winston
- Dockerized and published to Docker Hub
- Deployed using Kubernetes with a `Deployment` and `NodePort` `Service`

---

## 📁 Project Structure

calculator/ ├── app.js ├── package.json ├── Dockerfile ├── deployment.yaml ├── service.yaml └── README.md

---

## 🚀 Setup and Run Locally

1. **Initialize the project**

   ```bash
   npm init -y
Install dependencies
npm install express winston

Run the app
node app.js

Output:
Calculator microservice running on http://localhost:3000
info: Server started on port 3000 {"service":"calculator-microservice"}

🐳 Dockerization
Build Docker Image
docker build -t mariyatheresa/calculator-microservice:latest .

Login to Docker Hub
docker login

Push to Docker Hub
docker push mariyatheresa/calculator-microservice:latest

☸️ Kubernetes Deployment

Apply Deployment
kubectl apply -f deployment.yaml

Apply Service
kubectl apply -f service.yaml

Verify Pods
kubectl get pods

Check Service
kubectl get service calculator-service

Example Output:
Edit
NAME                 TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
calculator-service   NodePort   34.118.236.101   <none>        3000:30100/TCP   92s

🌐 Accessing the Service
http://localhost:30100

📦 Example Endpoints
GET /add?a=2&b=3 → 5
GET /subtract?a=10&b=4 → 6
GET /multiply?a=3&b=5 → 15
GET /divide?a=10&b=2 → 5

🛠 Tech Stack
Node.js
Express
Winston
Docker
Kubernetes

📌 Author
Mariya Theresa Shibu
Student ID: 223992433
Unit: SIT737 - Cloud-Native Application Development
