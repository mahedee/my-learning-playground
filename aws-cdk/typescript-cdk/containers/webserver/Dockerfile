# Building container

# Use the official Node.js 18 image based on Alpine Linux for the build stage
FROM node:18-alpine as build 

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
# Copies package.json and package-lock.json from the current directory on the host machine to the working directory in the Docker image
COPY package*.json ./
# Clean npm cache to ensure a clean state
RUN npm cache clean --force
# Install dependencies with verbose output
RUN npm install --verbose

# Copy the rest of the application code to the working directory
# Copy the rest of the application code from the current directory on the host machine to the working directory in the Docker image
COPY . .
# Build the TypeScript code
RUN npm run build:ts
# Remove development dependencies
RUN npm prune --production

# Serving container

# Use the official Node.js 18 image based on Alpine Linux for the serve stage
FROM node:18-alpine as serve

# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy the built application code from the build stage
COPY --from=build "/usr/src/app/dist/" "/usr/src/app/dist/"
# Copy the views from the build stage
COPY --from=build "/usr/src/app/views/" "/usr/src/app/views"
# Copy the production dependencies from the build stage
COPY --from=build "/usr/src/app/node_modules/" "/usr/src/app/node_modules/"
# Copy the package.json file from the build stage
COPY --from=build "/usr/src/app/package.json" "/usr/src/app/package.json"

# Expose port 8080 to allow external access
EXPOSE 8080
# Specify the command to run the application
# app.js is the compiled version of app.ts file
CMD [ "node", "dist/app.js" ]