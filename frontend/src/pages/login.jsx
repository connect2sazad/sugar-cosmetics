import React from "react";
import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { login } from '../services/users.service';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            products: [],
            head_insiders: {
                page_title: "Home",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
            data: {
                email: '',
                password: ''
            }
        };
    }

    componentDidMount() {
        // this.fetchProducts();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }));
    };

    login = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const res = await login(this.state.data);
            localStorage.setItem('token',res.token);
            localStorage.setItem('auth',btoa(res.email))
            this.props.navigate(`/`);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />
                <Header selected="home" />
                <div className="container-fluid">
                    <div className="row my-5 py-5">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <form onSubmit={this.login}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        name="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={this.state.data.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.data.password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(LoginPage);
