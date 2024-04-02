import React, { useEffect, useState } from 'react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useSeedContext } from '../../contexts';

interface Props {
    deco: Decoration;
    colorKey: Color;
};

export const Checkbox: React.FC<Props> = (props) => {
    const { deco, colorKey } = props;
    const [status, setStatus] = useState<ColorState>("off");
    const { categories, saveCats, preferences } = useSeedContext();

    // Save checkbox state to respective value in localStorage
    function updateValue(value: ColorState) {
        let newCats = {
            ...categories,
            [deco.catKey]: {
                ...categories[deco.catKey],
                decorations: {
                    ...categories[deco.catKey].decorations,
                    [deco.key]: {
                        ...categories[deco.catKey].decorations[deco.key],
                        colors: {
                            ...categories[deco.catKey].decorations[deco.key].colors,
                            [colorKey]: value
                        }
                    }
                }
            }
        };
        
        setStatus(value);
        saveCats(newCats);
    }

    // Click handler to allow checkbox parent div to update state, increasing tap target size
    function clickHandler() {
        switch(status) {
            case 'off':
                if (preferences.seedsOn) {
                    updateValue("seed")
                } else {
                    updateValue("on")
                }
                return;
            case 'seed':
                updateValue("on")
                return;
            default:
                updateValue("off")
                return;
        }
    }

    useEffect(() => {
        setStatus(deco.colors[colorKey]);
    }, [deco, colorKey]);

    return (
        <div className={ colorKey + status + ' transition-colors' } key= { colorKey } onClick={ clickHandler }>
            {
                status === 'off'
                    ? <PlusSmallIcon className='check-icon off'/>
                    : (
                        status === 'on'
                            ? <CheckCircleIcon className='check-icon on'/>
                            : (
                                preferences.seedsOn
                                    ? <ClockIcon className='check-icon seed'/>
                                    : <PlusSmallIcon className='check-icon off'/>
                            )
                    )
            }
        </div>
    );
}