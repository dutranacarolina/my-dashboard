import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Routes, Route, Link } from 'react-router-dom';
import DashboardPages from './pages/DashboardPages.jsx';
import ListPage  from './pages/ListPage.jsx';


function App (){

  return (
    <div className="flex min-h-screen flex-col  bg-background  text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
      md:grid-cols-2 md:grad-6 md:p-6
      xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <Routes>
      
           <Route path="/" element={<DashboardPages />} />
           <Route path="/lista" element={<ListPage />} /> 
         
        </Routes>
        <Link to="/lista">Ver todos</Link>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
