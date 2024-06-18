import React from "react";

import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Slider from "../components/slider.component";
import ProductsSlider from "../components/products-slider.component";
import { ClubVelvete, refer } from "../assets/images";
import CombosSlider from "../components/combos-slider.component";
import OfferSlider from "../components/offer-slider.component";
import { getAllProducts } from "../services/products.service";

class HomePage extends React.Component {

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
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async () => {

        try {
            const products = await getAllProducts();

            // console.log(products);
            this.setState({
                products: products
            })
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
                        <div className="col-12">
                            <Slider />
                        </div>
                        <div className="col-12 p-0">

                            {/* Best Seller Products */}
                            <ProductsSlider heading="best sellers" products={this.state.products} />

                            <ProductsSlider heading="exclusive range launch" background="bg-dark" products={this.state.products} />

                            <div className="container-fluid px-4 my-5 pb-5">
                                <div className="seprated-heading pt-5 mt-5">CLUB VELLVETTE</div>
                                <div className="row offer-bg py-5" style={{ letterSpacing: "2px" }}>
                                    <div className="col-1"></div>
                                    <div className="col-2">
                                        <img src={ClubVelvete} alt="Club Velvete" style={{ height: "200px" }} />
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-7 d-flex justify-content-center flex-column">
                                        <h2 className="text-white fw-bold">
                                            Buy @ ₹299 for 6 months
                                        </h2>
                                        <h2 className="text-white">
                                            Save 20% EXTRA + FREE Shipping
                                        </h2>
                                        <h3 className="text-danger fw-bold">
                                            JOIN NOW
                                        </h3>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>

                            <ProductsSlider heading="MAKEUP KITS & COMBOS" background="bg-dark" products={this.state.products} />

                            <CombosSlider heading="EXCLUSIVE COMBO LAUNCHES" />

                            <OfferSlider heading="EXCLUSIVE TREATS" />

                            <CombosSlider heading="HOT DEALS" />

                            <div className="container-fluid px-4 my-5">
                                <div className="seprated-heading pt-5 mt-5">REFER YOUR FRIENDS</div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <img src={refer} alt="Refer Friends" style={{ width: "100%" }} />

                                    </div>
                                </div>
                            </div>

                            <ProductsSlider heading="SKINCARE BASICS" products={this.state.products} />

                            <CombosSlider heading="SUGAR BEAUTY BLOG" />

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default withRouter(HomePage);