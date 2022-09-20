import './App.css';
import { SeedCell } from './components/SeedCell';
import structure from './seeds.json';

export type decoration = {
  // Names must be unique!!
  name: string;
  catInd: number;
  colors: colors;
  group: string | null;
}

export type colors = {
  red: string;
  yellow: string;
  blue: string;
  white: string;
  purple: string;
  grey: string;
  pink: string;
}

function App() {
  const { info, colors, categories, decorations } = structure;
  type structure = typeof structure;
  var storage: structure | any;


  //-- INITIAL CHECKS --//
  if (!localStorage.getItem("decorations")) {
    console.log("Decorations item undefined.")
    // Current version of storage not implemented
    if (localStorage.getItem("seeds")) {
      console.log("Version 0.4 or earlier - upgrading")
      // Version 0.4 or earlier of storage exists; upgrade version
      storage = JSON.parse(localStorage.getItem("seeds")!);
      upgradeStorage();
    } else {
      console.log("No storage found - quietly initializing")
      // No version of storage exists; initialize with current version
      initializeStorage();
    }
  } else if (localStorage.getItem("info")) {
    console.log("Version 0.5 or later")
    // Recent version of storage (0.5 or later) implemented; load and update version if necessary
    loadStorage();
    if (storage.info.seedsVersion < info.seedsVersion) {
      console.log("New version available - upgrading")
      upgradeStorage();
    }
  } else {
    // Data incompatible; reinitialize
    alert("Could not load saved data. Reinitializing.");
    initializeStorage();
  }
  //-- END INITIAL CHECKS --//


  // Initialize storage with current version and reload
  function initializeStorage() {
    localStorage.clear();
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.setItem("decorations", JSON.stringify(decorations));
    console.log("Initialization completed");
    window.location.reload();
  }

  // Upgrade older version of storage to current version
  function upgradeStorage() {
    // Check for "decorations" to avoid overwriting
    if (!storage.decorations) {
      // Reformat version < 0.4 (if exists) to include "nil" values for all unused colors
      if (storage.decorTypes) {
        storage.decorTypes.forEach( (x: decoration) => {
          for (let each of colors) {
            if (x.colors[each as keyof colors] === undefined) {
              x.colors[each as keyof colors] = "nil";
            }
          }
        });
      }
      // Create temporary decor array and fill with existing values from outdated version or default values from current
      var tempDecor: decoration[] = [];
      decorations.forEach( (x: decoration) => {
        let i = storage.decorTypes.findIndex( (y: decoration) => {
          return y.name === x.name;
        });
        if (i >= 0) {
          tempDecor.push(storage.decorTypes[i]);
        } else {
          tempDecor.push(x);
        }
      });
      // Assign tempDecor to storage.decorations
      storage.decorations = tempDecor as decoration[];
    }
    // Save all values to localStorage and remove old version
    localStorage.removeItem("seeds");
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.setItem("decorations", JSON.stringify(storage.decorations));
    window.location.reload();
  }

  // Load storage to populate UI
  function loadStorage() {
    storage = structure as structure;
    storage.info = JSON.parse(localStorage.getItem("info")!) as typeof info;
    storage.decorations = JSON.parse(localStorage.getItem("decorations")!) as decoration[];
  }

  // Save checkbox state to respective value in storage
  function updateValue(deco: decoration, key: keyof colors, value: string) {
    var i = storage.decorations.findIndex( (x: decoration) => x.name === deco.name );
    if (i >= 0) {
      storage.decorations[i].colors[key] = value;
      localStorage.setItem("decorations", JSON.stringify(storage.decorations));
    }
  }

  // Initialize variables for handling category title placement
  var prevCatInd = -1;
  var newCat = false;

  return (
    <div className="App">
      <header className="App-header">
        <span>Deco Tracker</span>
      </header>
      <div className='App-body'>
        { storage.decorations.map( (deco: decoration) => {
                // Set value to generate CategoryName in SeedCell when needed
                if (prevCatInd < deco.catInd) {
                  newCat = true;
                  prevCatInd = deco.catInd;
                }
                let output = (<SeedCell
                  deco={ deco }
                  categories={ categories }
                  newCat={ newCat }
                  clickHandler={ updateValue }
                  key={ deco.name }/>);
                newCat = false;
                return output;
        })}
      </div>
    </div>
  )
};

export default App;
