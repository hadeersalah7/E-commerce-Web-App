import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Dashboard, Error, Login } from './pages'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> 
      </Router>

    </>
  )
}

export default App
