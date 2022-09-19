import React, { useState } from 'react';

export type seedType = {
    name: string;
    catInd: number;
    colors: colors;
    group: string | null;
}

export type colors = {
    red: string;
    yellow: string;
    blue: string;
    white: string;
    purple: string;
    grey: string;
    pink: string;
}

interface Prop {
    seed: seedType;
    clickHandler: (seed: seedType, key: keyof colors, value: string) => void;
    checkState: string;
    keyName: string;
};

export const Checkbox: React.FC<Prop> = (props) => {
    const [checked, setChecked] = useState(props.checkState);
    
    function boolString(input: string) {
        if (input === "on") { return true; } else { return false; }
    }
    
    return ( 
        <input
            type="checkbox"
            checked={ boolString(checked) }
            className={ props.keyName + "Checkbox" }
            onChange={ (event) => {
                if (event.target.checked) {
                    setChecked("on");
                    props.clickHandler(props.seed, props.keyName as keyof colors, "on");
                } else {
                    setChecked("off");
                    props.clickHandler(props.seed, props.keyName as keyof colors, "off");
                }
            } }/>
    );
}