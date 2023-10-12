# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --only=production

# Copy the rest of the project files to the container
COPY . .

# Build the project
RUN npm run build

# Expose the port that the app will be running on
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "start" ]

VOLUME ./public
