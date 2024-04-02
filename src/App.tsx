import React, { useEffect, useState } from 'react';
import { useSeedContext } from './contexts';
import { CategoryView } from './components/CategoryView';
import { CountSpan } from './components/CountSpan';
import { Toolbar } from './components/Toolbar';
import { GuideGrid } from './components/GuideGrid';
import { countColors } from './utils';
import defaultSeeds from './constants/seeds';
import './App.css';


function App() {
	const { categories, categoryOrder, preferences, contextLoaded } = useSeedContext();
	let [seedCount, setSeedCount] = useState(0);
	let [seedMax, setSeedMax] = useState(defaultSeeds.decorationCount!);

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
		// TODO: Handle cases where local storage has keys that don't exist on defaultSeeds (here and elsewhere)
		let colorStates = categoryOrder.flatMap((catKey) => {
			return categories[catKey].decorationOrder.flatMap((decorKey) => {
				return Object.keys(categories[catKey].decorations[decorKey].colors).map((colorKey) => {
					return categories[catKey].decorations[decorKey].colors[colorKey as Color];
				})
			})
		});

		let { count, max } = countColors(colorStates, preferences.doCountSeeds);

		setSeedCount(count);
		setSeedMax(max);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [preferences.doCountSeeds, categories]);

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
				{ contextLoaded && categoryOrder.map( catKey => {
					return <CategoryView catKey={ catKey }/>;
				})}
				{
					// FIXME: Hide GuideGrid & footer while context is still loading
				}
				<GuideGrid visibility={ preferences.labelsOn }/>
				<span className='Version-info'>App: { defaultSeeds.info.appVersion } - Seeds: { defaultSeeds.info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;
