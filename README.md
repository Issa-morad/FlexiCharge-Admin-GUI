# FlexiCharge-Admin-GUI

## To Run

### Requirements
* Docker version 18.09 or later
* ```.env``` file in root of project

### Execution
1. Enter the root of the project
2. Copy the `example.env` to `.env`
  - - Note: The Environtment Variables need to be altered. For now set the variable `REACT_APP_FLEXICHARGE_API_URL` to the live backend address
3. Run the command `docker compose up --build`
  - - Note: If you are using an older version of docker you may need to run `docker-compose up --build`
  - - Note: The flag `--build` only needs to be present on __first time__ build
4. After several minutes the process should be ready
  - - Assuming default setttings the port should be `8080`
  - - Build process is quite lengthy on __first time__ builds


## Environment Variables
### APP_NAME
The name of the application. Used in docker compose.

### NODE_ENV
The running environment of the process. Either _production_ or _development_

### REACT_APP_DEV_PORT
The port the process will be run on.

### REACT_APP_FLEXICHARGE_API_URL
The URL of the backend to run remote requests to.
