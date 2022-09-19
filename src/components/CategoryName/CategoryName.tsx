import React, { useState } from 'react';
import { seedType } from '../Checkbox';

interface Prop {
    seed: seedType;
    readyForCat: boolean;
    categories: string[];
};

export const CategoryName: React.FC<Prop> = (props) => {
    const { seed, readyForCat, categories } = props;
    
    if (readyForCat) {
           return <div className="CategoryName">{ categories[seed.catInd] }</div>;
    } else { return <></>};
}