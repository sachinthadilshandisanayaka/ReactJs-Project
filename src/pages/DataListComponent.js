import React, {Component} from "react";
import axios from "axios";

class DataListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => {
                this.setState({
                    posts: resp.data
                });
                console.log(resp.data);
            });
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>
                    List of Data
                </h1>
                <div>
                    {
                        posts.map(post =>
                            <div key={post.id}>
                                {
                                    post.title
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default DataListComponent;
