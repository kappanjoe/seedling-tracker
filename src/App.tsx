import './App.css';
import { SeedCell } from './components/SeedCell';
import { seedType, colors } from './components/Checkbox';
import seedJson from './seeds.json';

function App() {
  var seeds = seedJson;
  
  // UNCOMMENT LINE BELOW TO RESET STORAGE //
  // localStorage.setItem("seeds", JSON.stringify(seedJson));

  if (localStorage.getItem("seeds") == null) {
    localStorage.setItem("seeds", JSON.stringify(seedJson));
  } else {
    seeds = JSON.parse(localStorage.getItem("seeds")!);
  }

  function updateValue(seed: seedType, key: keyof colors, value?: string) {
    var seedInd = seeds.decorTypes.findIndex((x) => x.name === seed.name);
    // console.log(seedInd);
    if (seedInd >= 0) {
      seeds.decorTypes[seedInd].colors[key] = value;
      localStorage.setItem("seeds", JSON.stringify(seeds));
    }
  }

  function clearStorage() {
    localStorage.removeItem("seeds");
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ clearStorage }>DEBUG - Clear Storage</button>
      </header>
      <div className='App-body'>
        { seeds.decorTypes.map((decorType) => {
                return (<SeedCell seed={ decorType } categories={ seeds.categories } clickHandler={ updateValue } key={ decorType.name }/>)
        })}
      </div>
    </div>
  )
};

export default App;
