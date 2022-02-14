import React from "react";
import {useLocation, useParams} from "react-router-dom";
const Post = () => {

    const {id} = useParams();
    const query = new URLSearchParams(useLocation().search);

    return (
        <div>
            <h1>Post id = {id}</h1>
            <h1>{query.get('name')}</h1>
        </div>
    );
};

export default Post;
