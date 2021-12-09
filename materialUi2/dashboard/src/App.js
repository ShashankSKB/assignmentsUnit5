import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Dashboard } from './components/dashboard';
import { Timer } from './components/timer';
import { SiteLayout } from './components/sitelayout';
import { CardSummary } from './components/cards';
function App() {
  return (
    <div className="App">
      
      <SiteLayout>
        <Dashboard></Dashboard>
       
      </SiteLayout>
    </div>
  );
}

export default App;
