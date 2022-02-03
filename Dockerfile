# from source image node:alpine
FROM node:alpine 
# our working directory in docker container will be app
WORKDIR /app

# copy package.json from current dir on our machine
# and paste to the current dir in docker container 
# environment
COPY package.json ./

# copy everything from the cwd on machine to the
# cwd of the container env
COPY ./ ./

# after copying run command npm install
RUN npm install

# run command npm start and put container in action
CMD [ "npm", "start" ]