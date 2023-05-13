import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import BackendLayout from './layouts/BackendLayout'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Report from './pages/Report'
import Setting from './pages/Setting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route path='/admin' element={<BackendLayout />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/report' element={<Report />} />
          <Route path='/admin/setting' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
