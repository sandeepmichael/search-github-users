import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './Footer';
import Navbar from './Navbar';
import {GithubProvider} from './context/GithubContext'
import UserPage from './users/UserPage';


function App() {
  return (
    <GithubProvider>
    <BrowserRouter>
    <div className='flex flex-col justify-between h-screen'>
        <Navbar />
          
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
          <Route  path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/user/:login' element={<UserPage />} />
          <Route path='/*' element={<NotFound />}/>
          </Routes>
        </main>
        
    

          <Footer />  
    </div>
        
  
    </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
