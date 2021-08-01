import React from 'react'
import Person from './Person'

function NameList() {
    const persons = ['Sachintha', 'Dilshan', 'Sanju', 'Malsha']
    const personList = persons.map(person => <Person person={person} />)
    return (
        <div>{personList}</div>
    )
}

export default NameList
