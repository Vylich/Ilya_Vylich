import './assets/scss/style.scss'
import Home from './assets/components/Home'
import Background from './assets/components/Background'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='page'>
			<div className='container'>
				<Background />
				<Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<Home/>}/>
          <Route exact path="/portfolio" element={<Home/>}/>
          <Route exact path="/experience" element={<Home/>}/>
          <Route exact path="/links" element={<Home/>}/>
				</Routes>
			</div>
		</div>
	)
}

export default App
