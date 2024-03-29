import React, { useEffect, useState } from 'react';
import { useSeedContext } from '../../contexts';
import { Checkbox } from '../Checkbox';
import { CountSpan } from '../CountSpan';
import structure from '../../seeds';
import { ColorState } from '../../types/classes.d';

interface Props {
    index: number;
};

export const SeedCell: React.FC<Props> = (props) => {
    const { index } = props;
    const { decorations, preferences } = useSeedContext();
    const [colorCount, setColorCount] = useState(0);
    const [colorMax, setColorMax] = useState(0);
    const [cellLoading, setCellLoading] = useState(true);
    const colors = structure.colors;

    useEffect(() => {
        let deco = decorations[index];
        let count = 0;
        let max = 0;
        Object.keys(deco.colors).forEach( (color) => {
            let value = deco.colors[color as keyof ColorSet];
            if (value === ColorState.Off) {
                max++;
            } else if (value === ColorState.On) {
                count++;
                max++;
            } else if (value === ColorState.Seed) {
                if (preferences.doCountSeeds) {
                    count++;
                }
                max++;
            }
        });
        setColorCount(count);
        setColorMax(max);
        setCellLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decorations]);

    return (
        <div className={ 'SeedCell' } key={ "Cell-" + index }>
            <div className='SeedInfo'>
                <span className='SeedName'>{ decorations[index].name }:</span>
                { !cellLoading && <CountSpan count={ colorCount } max={ colorMax } category={ false }/> }
            </div>
            <div className='CheckboxBlock transition-colors'>
                { colors.map((key: string) => {
                    // console.log(key + " " + seed.colors[key as keyof colors]);
                    var checked: string = decorations[index].colors[key as keyof ColorSet]!;
                    if (checked === "nil") {
                        return (
                            <div className='blankDiv transition-colors' key={ key }></div>
                        )
                    }

                    return <Checkbox
                                index= { index }
                                keyName= { key }
                                key= { key }
                                />;
                })}
            </div>
        </div>
    );
}