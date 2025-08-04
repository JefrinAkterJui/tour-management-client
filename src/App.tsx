import { Outlet } from "react-router"
import CommonLayout from "./components/Layouts/CommonLayout"


function App() {

  return (
    <>
      <CommonLayout>
        <Outlet/>
      </CommonLayout>
    </>
  )
}

export default App
