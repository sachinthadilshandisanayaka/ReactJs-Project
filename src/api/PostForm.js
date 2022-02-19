import React, {Component} from "react";
import axios from "axios";

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(resp => {
               console.log(resp);
            });
    }

    render() {
        const {
            userId,
            title,
            body
        } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User ID</label>
                        <input
                            type='text'
                            name='userId'
                            value={userId}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Body</label>
                        <input
                            type='text'
                            name='body'
                            value={body}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;
