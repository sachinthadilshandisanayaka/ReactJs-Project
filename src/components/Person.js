import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>Hello {person.name}, your age is {person.age} </h2>
        </div>
    )
}

export default Person
