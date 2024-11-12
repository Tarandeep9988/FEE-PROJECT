import './App.css'
import Layout from './Layout'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Home from './components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import LevelPage from './components/Levels/LevelPage'
import LoginPage from './components/LoginPage/LoginPage'
import TypingTesting from './components/TypingTesting/TypingTesting'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='aboutUs' element={<AboutUs />}></Route>
      <Route path='contactUs' element={<ContactUs />}></Route>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='levels' element={<LevelPage />}></Route>
      <Route path='typingtest' element={<TypingTesting />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
