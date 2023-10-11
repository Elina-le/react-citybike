import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navigation';
import StationList from './components/stationList';
import JourneyList from './components/journeyList';
import HomePage from './pages/homepage';
import SingleStation from './components/singleStation';


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
    </div>
  );
}

export default App;
