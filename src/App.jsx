import './assets/scss/style.scss'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Portfolio from './assets/components/Portfolio'
import Experience from './assets/components/Experience'
import Links from './assets/components/Links'

import Background from './assets/components/Background'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='page'>
			<div className='container'>
				<Background />
				<Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          <Route exact path="/links" element={<Links/>}/>
				</Routes>
			</div>
		</div>
	)
}

export default App
