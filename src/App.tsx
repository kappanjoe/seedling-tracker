import React, { useEffect, useState } from 'react';
import { useSeedContext } from './contexts';
import { CategoryView } from './components/CategoryView';
import { CountSpan } from './components/CountSpan';
import { Toolbar } from './components/Toolbar';
import { GuideGrid } from './components/GuideGrid';
import { ColorState } from './types/classes.d';
import structure from './seeds.json';
import './App.css';


function App() {
	const { categories, decorations, preferences, contextLoaded } = useSeedContext();
	let [seedCount, setSeedCount] = useState(0);
	let [seedMax, setSeedMax] = useState(structure.decorations.length);

	var bgColor: string;
  	if (preferences.theme === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			bgColor = "#191919";
		} else {
			bgColor = "#f9f8f3";
		}
	} else if (preferences.theme === 'dark') {
		bgColor = "#191919";
	} else {
		bgColor = "#f9f8f3";
	}

	useEffect(() => {
		let count = 0;
		let max = 0;

		(decorations).forEach((deco) => {
			Object.keys(deco.colors).forEach((color) => {
				let value = deco.colors[color as keyof ColorSet];
				if (value === ColorState.On || value === ColorState.Seed) {
					count++;
					max++;
				} else if (value === ColorState.Off) {
					max++;
				}
			})
		});

		setSeedCount(count);
		setSeedMax(max);

	}, [decorations]);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', preferences.theme === 'system'? (window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light') : preferences.theme);
	}, [preferences]);

	return (
		<div className="App transition-colors">
			<meta name="theme-color" content={ bgColor }/>
			<meta name="viewport" content="width=device-width, maximum-scale=1.0, viewport-fit=cover"/>
			<Toolbar/>
			<div className='App-body'>
				{ contextLoaded && <CountSpan count={ seedCount } max={ seedMax } category={ false }/> }
				{ contextLoaded && categories.map( (category) => {
					return <CategoryView
							key={ category.name }
							index={ categories.indexOf(category) }/>;
				})}
				<GuideGrid visibility={ preferences.labelsOn }/>
				<span className='Version-info'>App: { structure.info.appVersion } - Seeds: { structure.info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;
