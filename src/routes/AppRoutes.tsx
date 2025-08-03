import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../Pages/HeroPage'))
const Form = lazy(() => import('../Pages/FormPage'));
const NotFound = lazy(() => import('../Pages/NotFound'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
