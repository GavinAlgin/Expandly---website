import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './routes/AppRoutes'
import { Suspense } from 'react';


function App() {
  const routing = useRoutes(routes);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      {routing}
    </Suspense>
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper
