## Stackoverflow: server :dizzy:

Simplified clone of Stackoverflow. This repo holds the _Server_. [See client here](https://github.com/ajthinking/stackoverflow-client).

## :rocket: Tech Stack

- NodeJs
- TypeScript
- Express
- MongoDB
- Mongoose

## :warning: Prerequisite

- node
- npm/yarn
- mongodb

## :cd: How to run local

```bash
# Clone this repository
$ git clone git@github.com:ajthinking/stackoverflow-server.git

# Go into the repository
$ cd stackoverflow-server

# Start mongodb locally
$ mongod

# Install dependencies
$ yarn install

# Start the backend server
$ yarn dev

# Your API should now be running, try:
$ open http://localhost:3000/api/question

```

## :mag_right: Testing

Make sure mongodb is running before testing the server.

```bash
$ yarn test
```

<sub>There are missing tests.</sub>

## :globe_with_meridians: Deploy

#### Deploying Server App on Heroku

- You will need to have setup a [MongoDB Atlas account and database](https://docs.atlas.mongodb.com/getting-started/).
- Make sure that the cluster has allowlisted connections from anywhere.
- Create a [Heroku](https://dashboard.heroku.com/new-app) new app.
- Go to app settings
- Add the following enviroments.
  - DATABASE_URL (to use your MongoDB connection string)
  - JWT_SECRET
- Add Nodejs to buildpacks

-       # Go into the repository
        $ cd stackoverflow-server

        # Heroku Setup
        $ yarn install -g heroku
        $ heroku login
        $ heroku git:remote -a your-app-name

        # push subdirectory repository with subtree
        $ git subtree push --prefix server heroku master

## :crown: Acknowledgments

This is a continuation of [salihozdemir/stackoverflow-clone](https://github.com/salihozdemir/stackoverflow-clone)

## :memo: License

This project is made available under the MIT License.
