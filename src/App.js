import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import Description from './pages/Description';
import JobsApi from './api/JobsApi';

function App() {

  //information of the api
  JobsApi();

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/description' element={<Description />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;