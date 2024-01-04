# City Bike App

City Bike App is a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area. 
The data is owned by City Bike Finland.

You can find project backend [here](https://github.com/Elina-le/CityBikeAPI)

The project will soon be hosted online.



## Application

City Bike App is a web application that uses a backend service to fetch data. Backend is made with .NET Framework and C# and it uses a database. Frontend is made with React. 

## Database

The data is imported from CSV files and database is structured and managed using SQL Server. Data is validated before importing and journeys that last for less than ten seconds or covered distances shorter than 10 meters are not imported. The database comprises two main tables: ’Stations’ and ’Journeys’. These tables are interconnected, establishing a relational database model.

The Journey datasets used in the database are owned by City Bike Finland:

-   <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
-   <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
-   <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

Station dataset is by Helsinki Region Transport’s (HSL):

-	Dataset: <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>
- License and information: <https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902>


## Functionalities


### Home page view

- Navigation to station and journey pages.


### Journey list view

- A list of the journeys is displayed on a table.
- Pagination is used to handle millions of rows.
- 15 journeys are fetched at a time based on the page number, to make the app fast and to make UI user friendly.
- Navigation between pages with ‘First’, ‘Previous’, ‘Next’ and ‘Last’ buttons.
- Direct page access with input field. Users can enter a specific page number to jump directly to it.


### Station list view

- A list of all the city bike stations in Helsinki Capital area.
- Searching.
- Buttons for filtering station list by the city.
- Navigation to a single station view by clicking station name.


### Single station view

- Station information: name, address, city.
- Station location on Google map
- Station statistics and calculations: number of departures and returns, average journey distances starting from and ending to the station, top 5 return and departure stations.




# Getting Started with Create React App:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
