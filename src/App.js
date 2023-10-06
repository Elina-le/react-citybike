import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navigation';
import StationList from './components/stationList';
import JourneyList from './components/journeyList';
import HomePage from './pages/homepage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: "stationpage", element: <StationList />},
  { path: "journeypage", element: <JourneyList />}
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
