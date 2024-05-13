import Forms from './Components/Forms/Index'
import './App.css'
import {Route,Routes} from "react-router-dom"
import RoomPage from './Pages/RoomPage/Index'

const App = () => {
 
  return (
    
      <div className="container">
        <Routes>
          <Route path = "/" element={<Forms />} />
          <Route path= "/:roomId" element={<RoomPage/>}/>
        </Routes>
      </div>
       

  )
}

export default App
