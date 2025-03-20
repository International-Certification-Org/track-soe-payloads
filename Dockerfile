FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci && npm install -g nodemon
COPY . .
CMD ["nodemon", "--legacy-watch", "app.js"]