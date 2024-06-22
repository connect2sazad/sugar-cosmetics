import React from "react";
import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { Description, Keywords } from '../components/constants.component';

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

    fetchProducts = async () => {
        try {
            // Add your fetch logic here
            const collections = this.state.collections;
            // Simulate a fetch request
            const products = await mockFetchProductsByCollection(collections);
            this.setState({ products });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />
                <Header selected="home" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="py-5">
                                {this.state.collections}
                            </div>
                            <div>
                                {this.state.products.map((product, index) => (
                                    <div key={index}>
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

// Mock fetch function for demonstration
const mockFetchProductsByCollection = async (collections) => {
    // Simulate an API request based on the collections
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: `Product 1 in ${collections}`, description: `Description for Product 1 in ${collections}` },
                { name: `Product 2 in ${collections}`, description: `Description for Product 2 in ${collections}` }
            ]);
        }, 1000);
    });
};

export default withRouter(CollectionsPage);
