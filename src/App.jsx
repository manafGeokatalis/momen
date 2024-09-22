import TopNavBar from './components/top-nav-bar';
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <TopNavBar/>
      <Outlet/>
    </>
  )
}

export default App
