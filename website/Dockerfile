FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ENV REACT_APP_BUILD_VERSION=1.0.0

# Change the S3 Bucket URL with yours 
ENV REACT_APP_S3_URL=https://mybucket.s3.amazonaws.com 

#Change the name to your name
ENV DEPLOYED_BY=Manikanta

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
