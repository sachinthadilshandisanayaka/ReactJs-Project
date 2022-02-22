import React, {useState} from "react";

function LoginFunction({user}) {

    const initialValues = {
        userName: "",
        email: "",
        password: "",
    }

    const [state, setState] = useState(initialValues);

    return (
        <div>
            <h2>
                Login
            </h2>
            <form>
                <div>
                    <input type='text' name='userName' placeholder='User name'/>
                </div>
                <div>
                    <input type='text' name='email' placeholder='Email'/>
                </div>
                <div>
                    <input type='text' name='password' placeholder='Password'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default LoginFunction;
