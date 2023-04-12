import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import AdminDashboard from '../pages/AdminDashboard'
import Books from '../pages/Books'
import Collections from '../pages/Collections'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import Music from '../pages/Music'
import Open from '../pages/Open'
import Paints from '../pages/Paints'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between text-center">
        <Header />
        <Navbar />
        <div className="flex-1 flex-col justify-content bg-[#FFF2D1]">
          <Routes>
            <Route path="/" element={<Open />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collections" element={<Collections />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/books"
              element={
                <PrivateRoute>
                  <Books />
                </PrivateRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <PrivateRoute>
                  <Movies />
                </PrivateRoute>
              }
            />
            <Route
              path="/paints"
              element={
                <PrivateRoute>
                  <Paints />
                </PrivateRoute>
              }
            />
            <Route
              path="/music"
              element={
                <PrivateRoute>
                  <Music />
                </PrivateRoute>
              }
            />
            <Route
              path="/adminDashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
