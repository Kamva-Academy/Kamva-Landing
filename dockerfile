FROM node:18-alpine
LABEL name="Kamva landing-page front-end side"
LABEL developer= "ehsan gheychisaz"
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install --force

ARG NEXT_SHARP_PATH

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
