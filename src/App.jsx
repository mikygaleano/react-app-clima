import Header from "./components/header/Header"
import { liMenu } from "../src/utills/const.js"
import Home from "./components/Home/Home"

function App() {

  return (
    <>
      <Header menu={liMenu}/>
      <Home/>
    </>
  )
}

export default App
