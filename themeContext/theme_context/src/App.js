import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Form } from './components/form';
import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
