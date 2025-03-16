FROM node
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
RUN npm install -g nodemon
COPY . /app
CMD ["nodemon", "--legacy-watch", "app.js"]
