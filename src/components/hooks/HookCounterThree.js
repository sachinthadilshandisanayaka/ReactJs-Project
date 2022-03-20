import React, {useState} from 'react'

function HookCounterThree() {

    //state variable
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(event) => setName({ ...name, firstName: event.target.value})}/>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={((event) => setName({ ...name, lastName: event.target.value}))}/>
            </form>
            <div>
                <h2>
                    Your first name is - {name.firstName}
                </h2>
                <h2>
                    Your last name is - {name.lastName}
                </h2>
            </div>
        </div>
    )
}

export default HookCounterThree
