import './App.css';
import { Footer } from './components/footer';
import { LogingPage } from './pages/loginPage';
import { MainRoutes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
