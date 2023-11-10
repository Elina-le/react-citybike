import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import StationList from './components/StationsView/StationList';
import JourneyList from './components/JourneysView/JourneyList';
import HomePage from './components/HomePage/homepage';
import SingleStation from './components/SingleStationView/SingleStation';


const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: "stations", element: <StationList />},
  { path: "journeys", element: <JourneyList />},
  { path: "/stations/:id", element: <SingleStation />}
]);

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
