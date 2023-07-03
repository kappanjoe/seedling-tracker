import React, { useEffect, useState, MouseEvent } from 'react';
import { useSeedContext } from '../../contexts';
import { ColorState } from '../../types/classes.d';

interface Props {
    index: number;
    keyName: string;
};

export const Checkbox: React.FC<Props> = (props) => {
    const [checked, setChecked] = useState(ColorState.Off);
    const { index, keyName } = props;
    const { decorations, saveDecos } = useSeedContext();

    // Save checkbox state to respective value in localStorage
    function updateValue(value: ColorState) {
        let newDecos = [...decorations];
        newDecos[index].colors[keyName as keyof ColorSet] = value;
        setChecked(value);
        saveDecos(newDecos);
    }

    // Convert string to boolean for updating checkbox state
    function boolString(input: string) {
        if (input === "on") { return true; } else { return false; }
    }

    // Click handler to allow checkbox parent to update state, effectively increasing tap target
    function clickHandler(event: MouseEvent) {
        if ((event.currentTarget.firstChild! as HTMLInputElement).checked) {
            updateValue(ColorState.Off)
        } else {
            updateValue(ColorState.On)
        }
    }

    useEffect(() => {
        setChecked(decorations[index].colors[keyName as keyof ColorSet]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decorations]);

    return (
        <div className={ boolString(checked)? keyName + 'Checked transition-colors' : keyName + 'Unchecked transition-colors' } key= { keyName } onClick={ clickHandler }>
            <input
                type="checkbox"
                checked={ boolString(checked) }
                className={ keyName + "Checkbox" }
                onChange={ (event) => {
                    if (event.target.checked) {
                        updateValue(ColorState.On);
                    } else {
                        updateValue(ColorState.Off);
                    }
                }}
                key={ keyName + "Checkbox" }/>
        </div>
    );
}