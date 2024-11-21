import './App.css';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Product from './Components/Product/Product'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />

          {/* 404 Page  */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
