# mongodb-socket.io

## Description

This is a simple example of how to use socket.io with mongodb.


## Installation

- Clone the repository
- Install dependencies: `npm install` for both client and server
- Create a `.env` file in the `server`directory of the project and add the following variables:

```
MONGODB_URI=<insert your mongodb atlas uri>
```

- Run the server: `npm run start` in the `server` directory
- Run the client: `npm run start` in the `client` directory

## Usage

- Open the client in multiple different tabs
- Insert a message in one of the tabs
- All other tabs should receive the message