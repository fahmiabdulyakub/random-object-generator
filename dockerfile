# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy both package.json and package-lock.json (if available).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN npm run build

# Run the application.
CMD ["node", "dist/challengeB.js"]