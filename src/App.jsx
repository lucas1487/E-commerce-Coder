import NavBar from './components/NavBar'
import './App.css'
import CardListContainer from './components/cards/CardListContainer'



function App() {
 

  return (
    <div className="App h-screen">
      <NavBar/>
      
      <div className="flex justify-center">
      <CardListContainer/>
        


      </div>
    </div>
  )
}

export default App
