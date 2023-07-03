import React, { useState } from 'react';
import { useSeedContext } from './contexts';
import { CategoryView } from './components/CategoryView';
import { CountSpan } from './components/CountSpan';
import { Toolbar } from './components/Toolbar';
import { GuideGrid } from './components/GuideGrid';
import { ColorState } from './types/classes.d';
import structure from './seeds.json';
import './App.css';


function App() {
	const { categories, decorations, preferences } = useSeedContext();

	var bgColor: string;
  	if (preferences.themeMode === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			bgColor = "#191919";
		} else {
			bgColor = "#f9f8f3";
		}
	} else if (preferences.themeMode === 'dark') {
		bgColor = "#191919";
	} else {
		bgColor = "#f9f8f3";
	}

	// Store currently selected counting method && handle full counting of all seeds using either complete or in-game methods
	function countDecor() {
		var count = 0;
		var max = 0;

		(decorations).forEach( (deco) => {
			Object.keys(deco.colors).forEach( (color) => {
				let value = deco.colors[color as keyof ColorSet];
				if (value === ColorState.On) {
					count++;
					max++;
				} else if (value === ColorState.Off) {
					max++;
				}
			})
		});

		return [count, max];
	}

	// Run initial count
	let [initCount, initMax] = countDecor();
	const [currentFullCount, setCurrentFullCount] = useState(initCount);
	const [fullMax, setFullMax] = useState(initMax);

	// Update count on changes to any checkboxes
	function updateFullCount() {
		let [newCount, newMax] = countDecor();
		setCurrentFullCount(newCount);
		setFullMax(newMax);
	}

	document.documentElement.setAttribute('data-theme', preferences.themeMode === 'system'? (window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light') : preferences.themeMode);

	return (
		<div className="App transition-colors">
			<meta name="theme-color" content={ bgColor }/>
			<meta name="viewport" content="width=device-width, maximum-scale=1.0, viewport-fit=cover"/>
			<Toolbar/>
			<div className='App-body'>
				<CountSpan count={ currentFullCount } max={ fullMax } category={ false }/>
				{ categories.map( (category) => {
					return <CategoryView
							key={ category.name }
							index={ categories.indexOf(category) }
							updateFullCount={ updateFullCount }/>;
				})}
				<GuideGrid visibility={ preferences.labelsOn }/>
				<span className='Version-info'>App: v{ structure.info.appVersion } - Seeds: v{ structure.info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;
