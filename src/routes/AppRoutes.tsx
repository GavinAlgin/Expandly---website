import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../Pages/HeroPage'));
const Form = lazy(() => import('../Pages/FormPage'));
const TermsPage = lazy(() => import('../Pages/TermsPage'));
const AboutPage = lazy(() => import('../Pages/AboutUsPage'));
const PrivacyPage = lazy(() => import('../Pages/PrivacyPage'));
const ServicesPage = lazy(() => import('../Pages/ServicesPage'));
const ProjectsPage = lazy(() => import('../Pages/ProjectsPage'));
const PricingPage = lazy(() => import('../Pages/PricingPage'));
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
    path: '/aboutus',
    element: <AboutPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/pricingplan',
    element: <PricingPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
