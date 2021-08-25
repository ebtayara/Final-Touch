# FinalTouch

## What is FinalTouch?
FinalTouch is a basic fullstack app that uses Flask/Python on the backend and React/Javascript on the front. I designed it in an attempt to help a friend who owns a car detailing shop in my area. It is meant to allow users to view the available car detailing services and if they so choose, schedule an appointment at the shop. Users can then leave a review for said appointment to provide the owner/employees with much needed feedback.

## Database Design
The app uses PostgreSQL in conjunction with SQLAlchemy to setup the relational database used for querying.

## Frontend Overview
The app displays content using the below technologies.

### Technologies Used

#### React
This is a React application. Display logic is handled by the React libraries.

#### Redux
The Redux store is responsible for state management. Thunks were created to make API calls to the backend in order to retrieve data.

## Backend Overview
The app runs on a Flask server.

### Technologies Used

#### Flask PyPI
As a developer using Python on the backend, I decided to use the Flask framework. It provided me with the tools and libraries that allowed me to build my app.

#### PostgreSQL
I went with PostgreSQL because of how comfortable I am writing queries with it. I feel like I can trust my data and manage it with relative ease.

#### SQLAlchemy
I consider SQLAlchemy to be the ORM of choice for working with relational databases in python since it is easy to implement and does not require advanced knowledge of SQL.

## What's Next?
I would like to continue working on styling to give the app a more polished feel/look. I will also be making a couple of adjustments to my JSX to make the interface more appealing to users. Once the core functionality is 100% there, I want to add a way for users to create/view/edit/delete a custom service before taking their car in. As it is now, they can only see what services are available prior to booking an appointment. Finally, I want to add a simple search feature to the navigation bar to allow users to filter through the different services offered on the car detailing page.

