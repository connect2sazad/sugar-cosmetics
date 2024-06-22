import React from "react";
import { Link } from "react-router-dom";

import withRouter from '../components/withrouter.component';
import { Description, Keywords, sentenceCase } from '../components/constants.component';
import WebHead from '../components/webhead.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import SortFilter from "../components/sort-filter.component";
import ProductCard from '../components/product-card.component';

class CollectionsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            products: [],
            head_insiders: {
                page_title: "Home",
                keywords: Keywords,
                description: Description
            },
            collections: this.props.params.collections,
            collectionsName: ''
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate(prevProps) {
        // Check if the URL parameter has changed
        if (prevProps.params.collections !== this.props.params.collections) {
            this.setState({ collections: this.props.params.collections }, this.fetchProducts);
        }
    }

    fetchProducts = () => {

        this.setState({
            collectionsName: sentenceCase(this.state.collections)
        });

    }

    render() {

        const Product = {
            displayimage: "http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp",
            productname: 'SUGAR Play Mega Hype Colour Changing Lip Oil',
            displaytext: '6 Shades',
            offerprice: 479,
            fullprice: 599,
        }

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />
                <Header selected="home" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pt-5 px-4 text-dark">
                            {/* <Link className="text-dark" to="/">Home</Link> » {this.state.collectionsName} */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className="text-dark" to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.state.collectionsName}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-12 pt-3 pb-5 px-5">
                            <div className="row">
                                <div className="col-3">
                                    <SortFilter />
                                </div>
                                <div className="col-9">
                                    <ProductCard product={Product} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(CollectionsPage);
