// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// IMPORTING ROUTES
// import SiteRoutes from './routes.js'

// IMPORTING PAGES
import LandingPage from "./components/pages/LandingPage/landingPage"
import Contactus from "./components/pages/ContactUs/Contactus"
import Dashboard from "./components/pages/Dashboard/Dashboard"


function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {SiteRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={path.element}></Route>
          ))}
        </Routes>
      </BrowserRouter> */}

      <LandingPage></LandingPage>
      <Contactus></Contactus>
      <Dashboard></Dashboard>

    </>
  )
}

export default App
