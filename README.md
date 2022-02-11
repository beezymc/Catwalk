# Catwalk

## Overview
This project is the front-end web portal of a product view page for an ecommerce website. 

## Description
Catwalk allows users to view a product, see related products, and write questions and answers directed at the selected product. The project also includes the client-side server, which then connects to an external API provided by the project issuer for any CRUD operations.

## Installation: Development
NOTE: External API requires a key to connect; this project will not function without that access.
1. Fork and clone this repository
2. Install dependencies using 'npm install'
3. Include a github token, the path to the API, and the Port number within the config.js file where indicated
4. Open two terminals
5. Within one terminal, run 'npm run start' to start the server
6. Within the other, run 'npm run react-dev' to start the client
7. Navigate to your favored localhost port (as noted in the config)

## Installation: Production
NOTE: External API requires a key to connect; this project will not function without that access
1. Create an EC2 instance of your preferred size, using an Ubuntu 20.04 image
2. Make sure to apt-get update and upgrade
3. Install git and docker
4. Clone this repository to your local instance
5. Pull a docker image of node (this app was created using v. 14)
6. Include a github token, the path to the API, and the Port number within the config.js file in the cloned repository where indicated
7. Run the following command to build an image of the app: 'sudo docker build -t catwalk .'
8. Run the following command to run the app: 'sudo docker run -d -p 3000:3000 catwalk'
9. Use the following command to make your app accessible to the public: 'sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000'
10. Visit the public DNS of your EC2 container at the 'product/63609' route--if your deployment is successful, you should see the app!

## Current Deployment
The current deployment can be found here: ec2-54-210-174-187.compute-1.amazonaws.com/product/63609/

## Team:
Developed by David Rajec (Related Items), Eric Baldwin (Product Overview), and Anna Sarafanova (Questions and Answers)
