import React from 'react';
import { decoration } from '../../App';

interface Prop {
    seed: decoration;
    readyForCat: boolean;
    categories: string[];
};

export const CategoryName: React.FC<Prop> = (props) => {
    const { seed, readyForCat, categories } = props;
    const name = categories[seed.catInd];
    const prettyName = name.replace("-", " ");
    if (readyForCat) {
           return <div className="CategoryName" key={ name }>{ prettyName }</div>;
    } else { return <></>};
}