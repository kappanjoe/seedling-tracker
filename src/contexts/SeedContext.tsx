import React, { createContext, useContext, useEffect, useState } from 'react';

const SeedContext = createContext<ISeedContext>({
	info: {},
	decorations: [],
	categories: [],
	groups: []
});

interface Props {
	children: React.ReactNode
};

const SeedContextProvider = ({ children }: Props) => {
	const [info, setInfo] = useState({});
	const [decorations, setDecorations] = useState([]);
	const [categories, setCategories] = useState([]);
	const [groups, setGroups] = useState([]);


	return <SeedContext.Provider value={{ info, decorations, categories, groups }}>
		{ children }
	</SeedContext.Provider>;
};

export const useSeeds = () => {
	return useContext(SeedContext);
};
