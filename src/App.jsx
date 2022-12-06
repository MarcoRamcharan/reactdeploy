import {HashRouter,Route, Routes} from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
    </HashRouter>
  )
}

export default App
