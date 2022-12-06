import {BrowserRouter,Route, Routes} from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'

function App() {

  return (
    <BrowserRouter basename='/reactdeploy'>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
