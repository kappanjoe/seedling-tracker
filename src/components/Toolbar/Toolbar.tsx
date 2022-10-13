import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid';

interface Prop {
	// changeTheme: (to: String) => void;
	switchThemeOld: () => void;
	// onSelectToggled?: () => void;
	// selectMode: {
	// 	toggled: boolean,
	// 	buttonText: string,
	// };
	// confirmDelete?: () => void;
}

export const Toolbar: React.FC<Prop> = (props) => {
	const { switchThemeOld } = props;
	
	// function toggleSelect() {
	// 	if (selectMode.toggled) {
	// 		selectMode.toggled = false;
	// 		selectMode.buttonText = 'Edit';
	// 		onSelectToggled && onSelectToggled();
	// 	} else {
	// 		/* To-Do: show sorting handles */
	// 		selectMode.toggled = true;
	// 		selectMode.buttonText = 'Done';
	// 		onSelectToggled && onSelectToggled();
	// 	}
	// };
	
	// const deleteVis = {
	// 	display: (selectMode.toggled ? 'table-cell' : 'none'),
	// };
	
	return (
		<header className='Toolbar transition-colors'>
			<div className='Title'>
			  	<p>
					<span>Deco Tracker</span>
			  	</p>
			</div>
			<div className='Menu'>
			  	<p>
					<AdjustmentsHorizontalIcon onClick={ switchThemeOld }/>
			  	</p>
			</div>
		</header>
	);
}