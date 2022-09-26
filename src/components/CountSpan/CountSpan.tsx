import React from 'react';

interface Prop {
    count: number;
    max: number;
};

export const CountSpan: React.FC<Prop> = (props) => {
    const { count, max } = props;
    var countClass = "";
    var countText = "";

    if (count === max) {
        countClass = "ColorComplete"
        countText = "Completed!";
    } else {
        countClass = "ColorCount"
        countText = count + " / " + max;
    }

    return (
        <span className={ countClass }>{ countText }</span>
    );
}