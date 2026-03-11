import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from './components/Main';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
