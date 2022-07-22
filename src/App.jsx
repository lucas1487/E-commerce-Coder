import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'



function App() {
 

  return (
    <div className="App">
      <NavBar/>
      
      <div className="flex justify-center flex-wrap">
      <ItemListContainer/>
        


      </div>
    </div>
  )
}

export default App
