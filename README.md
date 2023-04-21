Considerations

I built a few tests with jest, to test the controller and services. You can check on the folder tests inside the modules.

Thinking about the future of the API, I let the number of walls be dynamic and used the array method reduce to check the can size, always assuming that the array order will be bigger -> smaller

Running the project locally

Create the file .env in the root directory and insert the line below (Change <PORT_NUMBER> to the number of the port in your computer that you want the API to use):
PORT=<PORT_NUMER>

Open the terminal and move to the root of the project you cloned.

Run the command yarn to install the dependencies.

Run the command yarn start to run the API.

Now you can make requests to http://localhost:<PORT>/docs-api or http://localhost:<PORT>/paint-calculator

Running the project using DOCKER

Open the terminal and move to the root of the project you cloned.

Run the command (you have to change <image_name> to a name of your choosing for the image that will be built):
docker build . <image_name>

After building the docker image, run the command below, to create and run the container based on the image previously built (change <PORT> to a port of your choosing in your computer and <image_name> to the name that you choose for the docker image)
docker run -p <PORT>:3000 <image_name>

Now you can make requests to http://localhost:<PORT>/docs-api or http://localhost:<PORT>/paint-calculator
