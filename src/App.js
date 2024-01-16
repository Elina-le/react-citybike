import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './errorHandling/ErrorPage';
import { RouteNotFound } from './errorHandling/RouteNotFound';
import HomePage from './components/HomePage/homepage';
import JourneyList from './components/JourneysView/JourneyList';
import StationList from './components/StationsView/StationList';
import SingleStation from './components/SingleStationView/SingleStation';
import RootLaytout from './components/Root';


const errorHandler = (error, errorInfo) => {
  console.log('Loggin', error, errorInfo)
}

const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorPage} onError={errorHandler}>
    <Outlet />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <RootLaytout />,
        children: [
          { path: '/', element: <HomePage />},
          { path: "/stations", element: <StationList />},
          { path: "/journeys", element: <JourneyList /> },
          { path: "/stations/:id", element: <SingleStation />},
          { path: "*", element: <RouteNotFound />}
        ]
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
