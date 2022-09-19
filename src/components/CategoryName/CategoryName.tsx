import React from 'react';
import { seedType } from '../Checkbox';

interface Prop {
    seed: seedType;
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