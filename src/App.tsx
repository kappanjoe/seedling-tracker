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

  function updateValue(seed: seedType, key: keyof colors, value: string) {
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

  function reformatStorage() {
    const colors = ["red", "yellow", "blue", "white", "purple", "grey", "pink"];
    
    seeds.decorTypes.forEach( (x) => {
      for (let each of colors) {
        if (x.colors[each as keyof colors] === undefined) {
          x.colors[each as keyof colors] = "nil";
        }
      }
    });

    localStorage.setItem("seeds", JSON.stringify(seeds));
    window.location.reload();

  }

  var prevCat = -1;
  var nextCat = false;

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={ clearStorage }>DEBUG - Clear Storage</button>
        <button onClick={ reformatStorage }>DEBUG - Reformat Storage</button> */}
        <span>Deco Tracker</span>
      </header>
      <div className='App-body'>
        { seeds.decorTypes.map((seed) => {
                // Set value to generate CategoryName in SeedCell when needed
                if (prevCat < seed.catInd) {
                  nextCat = true;
                  prevCat = seed.catInd;
                }
                let output = (<SeedCell
                  seed={ seed }
                  categories={ seeds.categories }
                  nextCat={ nextCat }
                  clickHandler={ updateValue }
                  key={ seed.name }/>);
                nextCat = false;
                return output;
        })}
      </div>
    </div>
  )
};

export default App;
