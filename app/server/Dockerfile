# Step 1: Build the Node.js app 
FROM node:18 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
EXPOSE 5000 
CMD ["npm", "start"] 