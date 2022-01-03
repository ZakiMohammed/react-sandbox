import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PageTitle from './components/PageTitle';
import CustomHookExample2 from './pages/CustomHookExample2';
import CustomHookExample1 from './pages/CustomHookExample1';
import UseCallbackExample from './pages/UseCallbackExample';
import UseMemoExample from './pages/UseMemoExample';
import UseRefExample3 from './pages/UseRefExample3';
import UseRefExample2 from './pages/UseRefExample2';
import UseRefExample1 from './pages/UseRefExample1';
import Header from './components/Header';

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='container my-5'>
					<div className="row">
						<div className="col">
							<PageTitle />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/useref-1' element={<UseRefExample1 />} />
								<Route path='/useref-2' element={<UseRefExample2 />} />
								<Route path='/useref-3' element={<UseRefExample3 />} />
								<Route path='/usememo' element={<UseMemoExample />} />
								<Route path='/usecallback' element={<UseCallbackExample />} />
								<Route path='/custom-hook-1' element={<CustomHookExample1 />} />
								<Route path='/custom-hook-2' element={<CustomHookExample2 />} />
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
