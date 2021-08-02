import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: '1',
            name: 'sanju',
            age: '12'
        },
        {
            id: '2',
            name: 'sachintha',
            age: '13'
        },
        {
            id: '3',
            name: 'sanju 2',
            age: '29'
        },
        {
            id: '4',
            name: 'sanju 3',
            age: '20'
        },
        {
            id: '5',
            name: 'sanju 4',
            age: '32'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>{personList}</div>
    )
}

export default NameList
