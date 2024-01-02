import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Shop from './pages/Shop'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
