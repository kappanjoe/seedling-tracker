import React, { useState } from 'react';
import { decoration, colors } from '../../App';
import { Checkbox } from '../Checkbox';
import { CountSpan } from '../CountSpan';
import structure from '../../seeds.json';

interface Prop {
    index: number;
    decorations: decoration[];
    bigCountHandler: () => void;
};

export const SeedCell: React.FC<Prop> = (props) => {
    var { index, decorations, bigCountHandler } = props;
    const colors = structure.colors;
    var deco = decorations[index];

    // Initialize counts
    var count = 0;
    var max = 0;
    Object.keys(deco.colors).forEach( (color) => {
        let value = deco.colors[color as keyof colors];
        if (value === "off") {
            max++;
        } else if (value === "on") {
            count++;
            max++;
        }
    })

    // Assign handler to refresh count for CountSpan component
    const [currentCount, setCurrentCount] = useState(count);
    function refreshCount(value: number) {
        setCurrentCount(value);
    }

    return (
        <div className={ 'SeedCell' } key={ "Cell-" + index }>
            <div className='SeedInfo'>
                <span className='SeedName'>{ deco.name }:</span>
                <CountSpan count={ currentCount } max={ max }/>
            </div>
            <div className='CheckboxBlock transition-colors'>
                { colors.map((key: string) => {
                    // console.log(key + " " + seed.colors[key as keyof colors]);
                    var checked: string = deco.colors[key as keyof colors]!;
                    if (checked === "nil") {
                        return (
                            <div className='blankDiv transition-colors' key={ key }></div>
                        )
                    }
                    
                    return <Checkbox
                                index= { index }
                                decorations= { decorations }
                                checkState= { checked }
                                keyName= { key }
                                key= { key }
                                smallCountHandler= { refreshCount }
                                bigCountHandler= { bigCountHandler }/>;
                })}
            </div>
        </div>
    );
}