import Login from './views/Login'
import { Outlet } from "react-router-dom";

function App() {
  
  let element = <Login />
  let outt = <Outlet/>
  

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
