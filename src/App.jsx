import './App.css'
import Header from './components/Header/Header.jsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AppRoutes from './routers/AppRoutes.jsx'

function App() {

  return (
    <>
      <Header></Header>
      {/**  */}
      <AppRoutes/>
    </>
  )
}

export default App
