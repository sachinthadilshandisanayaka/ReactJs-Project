import React from 'react';

const Hello = () => {
    // return  (
    //     <div>
    //         <h1>Hello Everyone</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', { id: 'header-main', className: 'header-name' }, 'Hello World'));
}

export default Hello;