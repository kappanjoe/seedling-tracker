import React, { useEffect, useState } from 'react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useSeedContext } from '../../contexts';
import { ColorState } from '../../types/classes.d';

interface Props {
    index: number;
    keyName: string;
};

export const Checkbox: React.FC<Props> = (props) => {
    const [status, setStatus] = useState(ColorState.Off);
    const { index, keyName } = props;
    const { decorations, saveDecos } = useSeedContext();

    // Save checkbox state to respective value in localStorage
    function updateValue(value: ColorState) {
        let newDecos = [...decorations];
        newDecos[index].colors[keyName as keyof ColorSet] = value;
        setStatus(value);
        saveDecos(newDecos);
    }

    // Click handler to allow checkbox parent to update state, effectively increasing tap target
    function clickHandler() {
        switch(status) {
            case 'off':
                updateValue(ColorState.Seed)
                return;
            case 'seed':
                updateValue(ColorState.On)
                return;
            default:
                updateValue(ColorState.Off)
                return;
        }
    }

    useEffect(() => {
        setStatus(decorations[index].colors[keyName as keyof ColorSet]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decorations]);

    return (
        <div className={ keyName + status + ' transition-colors' } key= { keyName } onClick={ clickHandler }>
            {
                status === 'off'
                    ? <PlusSmallIcon className='check-icon off'/>
                    : (
                        status === 'seed'
                            ? <ClockIcon className='check-icon seed'/>
                            : <CheckCircleIcon className='check-icon on'/>
                    )
            }
        </div>
    );
}