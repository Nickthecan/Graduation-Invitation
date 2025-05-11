import { Route, Routes , BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Guests from './pages/Guests'
import './styles/index.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />}/>
					<Route path='/' element={<Home />}/>
					<Route path='/guests' element={<Guests />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
