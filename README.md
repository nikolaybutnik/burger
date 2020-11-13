# Eat-Da-Burger

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A web application that keeps track of the burgers you want to eat, and those you have eaten! This application was created primarily to practice working with MySQL and Express.

[Link to application](https://still-beach-47184.herokuapp.com/)

![Burger App Screenshot](https://github.com/nikolaybutnik/burger/blob/main/public/assets/img/burger-screenshot.png?raw=true)

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation

To install the application locally, run `npm install` to install all dependencies required to run it. Navigate to `./db` folder and run `schema.sql` with a tool of your choice. The database will be created and populated with tables. As an option, run the code in `seeds.sql` to populate the database with placeholder entries. Navigate to the `./config` folder and ensure that `host`, `port`, `user`, `password` and `database` fields inside the `connection.js` file match your database information.

## Usage

To start the application locally, run `server.js` from the CLI. [The app is also hosted on Heroku.](https://still-beach-47184.herokuapp.com/)
This application works with a SQL database to dynamically load the relevant values from the database and display them in the proper sections on the screen.
Enter the name of the burger you want in the provided field, and it'll be added to the `Ready to devour!` field. Click `DEVOUR IT!` and the burger will be moved to the `Devoured` field. Click `DELETE` on a burger in the `Devoured` field to get rid of the burger.

## License

This project is covered under the MIT license. To find out what is permitted under this license, click the license badge at the top of the README.

## Contributing

Feel free to submit any pull requests. All pull requests will be considered.

## Tests

No tests are currently written for this application.

## Questions

You may directly send any questions related to this project or any of my other projects to [my email adress](mailto:btnk.nik@gmail.com). To find all my projects visit [my GitHub profile](https://github.com/nikolaybutnik).
