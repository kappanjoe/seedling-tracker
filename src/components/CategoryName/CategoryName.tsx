import React, { useState } from 'react';
import { seedType } from '../Checkbox';

interface Prop {
    seed: seedType;
    readyForCat: boolean;
    categories: string[];
};

export const CategoryName: React.FC<Prop> = (props) => {
    const { seed, readyForCat, categories } = props;
    var name = categories[seed.catInd];
    name = name.replace("-", " ");
    if (readyForCat) {
           return <div className="CategoryName">{ name }</div>;
    } else { return <></>};
}