import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Login } from './pages'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
