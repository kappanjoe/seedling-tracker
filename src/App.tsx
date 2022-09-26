import { useState } from 'react';
import './App.css';
import { Category } from './components/Category';
import structure from './seeds.json';
import { MoonIcon } from '@heroicons/react/20/solid';

export type decoration = {
  // Names must be unique!!
  name: string;
  catInd: number;
  colors: colors;
  group: string | null;
};

export type colors = {
  red: string;
  yellow: string;
  blue: string;
  white: string;
  purple: string;
  grey: string;
  pink: string;
};

export type category = { 
  name: string;
  values: number[];
  isOpen: boolean;
};

function App() {
  const { info, colors, categories, decorations } = structure;
  type structure = typeof structure;
  var storage: structure | any;

  // Set themeing
  let prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var preference: string;
  if (localStorage.getItem("theme") !== undefined) {
    preference = localStorage.getItem("theme")!;
  } else if (prefersDark) {
    preference = "dark";
  } else {
    preference = "light";
  }
  const [themeMode, setThemeMode] = useState(preference);
  var bgColor: string;
  if (themeMode === 'light') {
    bgColor = "#f9f8f3";
  } else {
    bgColor = "#191919";
  }
  function switchTheme() {
    const newTheme = themeMode === 'light'? 'dark' : 'light';
    localStorage.setItem("theme", newTheme);
    setThemeMode(newTheme);
  }

  //-- INITIAL CHECKS --//
  if (!localStorage.getItem("decorations")) {
    console.log("Decorations item undefined.");
    // Current version of storage not implemented
    if (localStorage.getItem("seeds")) {
      console.log("Version 0.4 or earlier - upgrading");
      // Version 0.4 or earlier of storage exists; upgrade version
      storage = JSON.parse(localStorage.getItem("seeds")!);
      upgradeStorage();
    } else {
      console.log("No storage found - quietly initializing");
      // No version of storage exists; initialize with current version
      initializeStorage();
    }
  } else if (localStorage.getItem("info")) {
    console.log("Version 0.5 or later");
    // Recent version of storage (0.5 or later) implemented; load and update version if not current
    loadStorage();
    if (storage.info.seedsVersion < info.seedsVersion || storage.info.appVersion < info.appVersion) {
      console.log("New version available - upgrading");
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
    localStorage.setItem("categories", JSON.stringify(categories));
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
      reinitDecorArray(storage.decorTypes);
    } else {
      reinitDecorArray(storage.decorations);
    }
    // Save all values to localStorage and remove old version; initialize "categories" if v0.5 or v0.6
    localStorage.removeItem("seeds");
    if (storage.info.seedsVersion < 0.7) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.setItem("decorations", JSON.stringify(storage.decorations));
    window.location.reload();
  }

  // Reinitialize decorations array
  function reinitDecorArray(source: decoration[]) {
    // Create temporary decor array and fill with existing values from outdated version or default values from current
    var tempDecor: decoration[] = [];
    decorations.forEach( (x: decoration) => {
      let i = source.findIndex( (y: decoration) => {
        return y.name === x.name;
      });
      if (i >= 0) {
        tempDecor.push(source[i]);
      } else {
        tempDecor.push(x);
      }
    })
    // Assign tempDecor to storage.decorations
    storage.decorations = tempDecor;
  }

  // Load storage to populate UI
  function loadStorage() {
    storage = structure as structure;
    storage.info = JSON.parse(localStorage.getItem("info")!) as typeof info;
    storage.decorations = JSON.parse(localStorage.getItem("decorations")!) as decoration[];
    storage.categories = JSON.parse(localStorage.getItem("categories")!) as typeof categories;
    // completionStatus();
  }

  // // Calculate completed pikmin
  // function completionStatus() {
  //   (storage.decorations as decoration[]).forEach( (deco) => {
  //     Object.keys(deco.colors).forEach( (color) => {
  //       let value = deco.colors[color as keyof colors];
  //       if (value === "on") {
  //         count++;
  //         max++;
  //       } else if (value === "off") {
  //         max++;
  //       }
  //     })
  //   })
  // }

  return (
    <div className="App" data-theme={ themeMode }>
      <meta name="theme-color" content={ bgColor }/>
      <header className="App-header">
        <span>Deco Tracker</span><br/>
        <MoonIcon onClick={ switchTheme }/>
        {/* <span>{ count + " out of " + max }</span> */}
      </header>
      <div className='App-body'>
        { categories.map( (category) => {
            return <Category
                      key={ category.name }
                      index={ categories.indexOf(category) }
                      categories={ storage.categories }
                      decorations={ storage.decorations }/>;
        })}
        <span className='Version-info'>App: v{ info.appVersion } - Seeds: v{ info.seedsVersion }</span>
      </div>
    </div>
  )
};

export default App;
