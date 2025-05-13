import './App.css'
import Header from './components/Header/Header.jsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AppRoutes from './routers/AppRoutes.jsx'

function App() {

  return (
    <>
      {/**<HomePage></HomePage>*/}
      {/**<Header><CatalogPage></CatalogPage></Header>*/}
      <Header></Header>
      {/**  */}
      {/** <DetailsPage></DetailsPage> */}
      <AppRoutes/>
    </>
  )
}

export default App
