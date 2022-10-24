import React from 'react';

interface Prop {
	visibility: boolean;
};

export const GuideGrid: React.FC<Prop> = (props) => {
	let { visibility } = props

	if (visibility) {
		return (
			<div className="guideGrid transition-colors">
				<div className="redGuide transition-colors">r</div>
				<div className="yellowGuide transition-colors">y</div>
				<div className="blueGuide transition-colors">b</div>
				<div className="whiteGuide transition-colors">w</div>
				<div className="purpleGuide transition-colors">p</div>
				<div className="greyGuide transition-colors">rck</div>
				<div className="pinkGuide transition-colors">wng</div>
			</div>
		);
	} else {
		return <></>;
	}
}