import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <NavBar/>
        <AppRoutes/>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App