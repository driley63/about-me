import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/pages/index.scss'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'
import About from './routes/about'
import Experience from './routes/experience'
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './routes/interests/interests'
import InterestDetails from './routes/interests/interest-details'
import { Navbar, Nav, Stack } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))
const NavbarLayout = () => (
	<Stack className="col-md-5 mx-auto navigation container-fluid card m-0 p-0">
		<Navbar sticky='top' className="d-flex justify-content-center nav-bar card m-0 p-0">
			<Nav>
				<Stack direction="horizontal" className="d-flex justify-content-center">
					<Nav.Link to={'../about'} className="p-4"><Link to={'../about'}>About</Link></Nav.Link>
					<Nav.Link className="p-4"><Link to={'../experience'}>Experience</Link></Nav.Link>
					<Nav.Link className="p-4"><Link to={'../interests'}>Interests</Link></Nav.Link>
				</Stack>
			</Nav>
		</Navbar>
		<div className="content-outlet m-4">
			<Outlet />
		</div>
	</Stack>
)

root.render(
	<BrowserRouter>
		<Routes>
			<Route element={<NavbarLayout />}>
				<Route path="/" element={<About />}/>
				<Route path="about" element={<About />}/>
				<Route path="interests" element={<Interests />} />
				<Route path="interests/details/:id" element={<InterestDetails /> } />
				<Route path="experience" element={<Experience />}/>
			</Route>
			<Route path='*' element={<p>There is nothing here: 404!</p>} />
		</Routes>
	</BrowserRouter>
  
)


