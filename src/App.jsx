import './assets/scss/style.scss'
import Home from './assets/components/Home'
import Background from './assets/components/Background'


function App() {

  return (
    <div className="page">
      <div className="container">
        <Background />
        <Home />
      </div>
    </div>
  )
}

export default App
