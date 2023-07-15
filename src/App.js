import './App.css';
import Op from './components/Optimizationsettings';
import Portfolio from './components/Portfolio';
import SelectP from './components/SelectP';
import Add from './components/Add';
function App() {
  return (
    <div className="App main">

      <div className=' bg-black text-light main2'>
        <h1>PortfolioLabs</h1> 
        </div>
        <SelectP />
        <Add/>
        <Op/>
        <Portfolio/>
        
    </div>
  );
}

export default App;
