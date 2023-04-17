FROM node:16-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Copy the source files into the image
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]