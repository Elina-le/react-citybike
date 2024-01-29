# City Bike App

City Bike App is a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area. 
The data is owned by City Bike Finland.

You can find project backend [here](https://github.com/Elina-le/CityBikeAPI).

The project is hosted on Netlify: <https://calm-choux-b7c076.netlify.app/>.



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




# Running Frontend Locally

The frontend of this application is built using React, bootstrapped with Create React App.

## Prerequisites

-	**Node.js**: Ensure you have Node.js installed on your machine. You can download it from Node.js website.
-	**NPM (Node Package Manager)**: This comes bundled with Node.js. You can check its installation by running **npm -v** in your terminal.

## Clone the repository 

-	Open your terminal or command prompt.
-	Navigate to the directory where you want to clone the repository.
-	Run the following command: **git clone URL**, replacing URL with the repository URL:
  
Repository URL: https://github.com/Elina-le/react-citybike.git

## Install Dependencies

-	Navigate to the frontend directory in your terminal
-	Run **npm install** to install all the necessary dependencies. This step is crucial as it sets up everything needed for the React application to run.

## Running the Application

-	Once the dependencies are installed, you can start the server using commad: **npm start**.
-	This command runs the app in the development mode.
-	Open http://localhost:3000 to view it in your browser.

## Integrating with the Backend

To fully utilize all the features of this application, it's essential to run it in conjunction with its backend services. The backend handles crucial operations like data processing, API calls, and database interactions.

### Setting Up the Backend

The backend code is maintained in a separate repository. You can access it [here](https://github.com/Elina-le/CityBikeAPI).
Detailed instructions for setting up and running the backend, including database configuration, are available in the backend repository's README file.

## Dispalying Google Map
  
The application utilizes Google Maps for displaying maps in the single station view. To enable this feature, you need to obtain and use your own Google Maps API Key. Follow these steps to set it up:

### Obtaining a Google Maps API Key
-	Visit the Google Cloud Platform Console.
-	If you haven't already, create a new project.
-	Navigate to the "APIs & Services > Credentials" section.
-	Click on “Create Credentials” and select “API key”. Follow the prompts to create a new API key.

### Configuring the API Key in Your Application
-	In the root directory of your frontend application, create a file named .env.local.
-	Inside this file, add the following line:

  REACT_APP_GOOGLE_MAPS_API_KEY="Your API Key Here"

- Replace ’Your API Key Here’ with the API key you obtained from Google Cloud Platform.
-	Make sure the **.env.local** is listed in your **.gitignore** file.
