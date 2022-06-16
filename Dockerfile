FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]

# Pull Docker Hub base image
# FROM node:14.16.0-alpine3.10

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# # Set working directory
# WORKDIR /usr/app
# # Install app dependencies
# COPY package*.json ./
# RUN npm install -qyg nodemon@2.0.7
# RUN npm install -qy
# # Copy app to container
# COPY . .
# # Run the "dev" script in package.json
# CMD ["npm", "run", "dev"]
