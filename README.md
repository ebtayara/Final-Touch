# FinalTouch

## What is FinalTouch?
FinalTouch is a basic fullstack app that uses Flask/Python on the backend and React/Javascript on the front. I designed it in an attempt to help a friend who owns a car detailing shop in my area. It is meant to allow users to view the available car detailing services and if they so choose, schedule an appointment at the shop. 

<img width="493" alt="Screen Shot 2021-09-06 at 7 49 33 AM" src="https://user-images.githubusercontent.com/35829143/132234617-11cf6578-7fb1-43ee-8e28-18bb6584f96a.png">

Users can then leave a review for said appointment to provide the owner/employees with much needed feedback.

<img width="457" alt="Screen Shot 2021-09-06 at 7 52 08 AM" src="https://user-images.githubusercontent.com/35829143/132234863-dd293793-8c09-4dfc-b2f7-09c385dcc5b1.png">

## Database Design
The app uses PostgreSQL in conjunction with SQLAlchemy to setup the relational database used for querying.

<img width="721" alt="Screen Shot 2021-09-06 at 7 53 51 AM" src="https://user-images.githubusercontent.com/35829143/132235093-8bf62c7b-fe5b-45f4-95df-f01d079d1500.png">

## Frontend Overview
The app displays content using the below technologies.

### Technologies Used

#### React
This is a React application. Display logic is handled by the React libraries.

#### Redux
The Redux store is responsible for state management. Thunks were created to make API calls to the backend in order to retrieve data.

<img width="420" alt="Screen Shot 2021-09-06 at 7 55 28 AM" src="https://user-images.githubusercontent.com/35829143/132235287-e95b78dd-3b63-4705-ac5f-87ec55d9963a.png">

## Backend Overview
The app runs on a Flask server.

### Technologies Used

#### Flask PyPI
As a developer using Python on the backend, I decided to use the Flask framework. It provided me with the tools and libraries that allowed me to build my app.

#### PostgreSQL
I went with PostgreSQL because of how comfortable I am writing queries with it. I feel like I can trust my data and manage it with relative ease.

<img width="639" alt="Screen Shot 2021-09-06 at 7 57 16 AM" src="https://user-images.githubusercontent.com/35829143/132235511-4278fa58-ac30-4ba1-a6ae-eda4830331b0.png">

#### SQLAlchemy
I consider SQLAlchemy to be the ORM of choice for working with relational databases in python since it is easy to implement and does not require advanced knowledge of SQL.

## What's Next?
I would like to continue working on styling to give the app a more polished feel/look. The current background images are placeholders until design decisions are made by the shop. I will also be making a couple of adjustments to my logic/JSX to make the interface more appealing to users. Once the core functionality is 100% there, I want to add a way for users to create/view/edit/delete a custom service before taking their car in. As it is now, they can only see what services are available prior to booking an appointment. Finally, I want to add a simple search feature to the navigation bar to allow users to filter through the different services offered on the car detailing page. 

