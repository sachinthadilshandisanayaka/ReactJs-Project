import React from 'react';

const Greet = props => {
    // const {name} = props;
    return (
        <div>
            <p>hello world {props.name} </p>
            {props.children}
        </div>

    );
}

export default Greet;