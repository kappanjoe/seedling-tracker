import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { CountSpan } from '../CountSpan';
import structure from '../../seeds.json';

interface Props {
    index: number;
    decorations: Decoration[];
    updateFullCount: () => void;
};

export const SeedCell: React.FC<Props> = (props) => {
    var { index, decorations, updateFullCount } = props;
    const colors = structure.colors;
    var deco = decorations[index];

    // Initialize counts
    var count = 0;
    var max = 0;
    Object.keys(deco.colors).forEach( (color) => {
        let value = deco.colors[color as keyof ColorSet];
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
                <CountSpan count={ currentCount } max={ max } category={ false }/>
            </div>
            <div className='CheckboxBlock transition-colors'>
                { colors.map((key: string) => {
                    // console.log(key + " " + seed.colors[key as keyof colors]);
                    var checked: string = deco.colors[key as keyof ColorSet]!;
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
                                updateFullCount= { updateFullCount }/>;
                })}
            </div>
        </div>
    );
}