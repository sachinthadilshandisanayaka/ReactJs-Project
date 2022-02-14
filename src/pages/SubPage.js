import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

const SubPage = ({login}) => {
    const history = useHistory();

    useEffect(() => {
            if (!login) {
                history.push('/');
            }
        }, [
            login,
            history
        ]
    )

    return (
        <div>
            <h1>SubPage Page</h1>
        </div>
    );
};

export default SubPage;
