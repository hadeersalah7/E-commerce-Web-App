import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Error, Login } from './pages'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          
        </Routes>
      </Router>

    </>
  )
}

export default App
