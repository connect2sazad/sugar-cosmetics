import React from "react";
import axios from "axios";

import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Slider from "../components/slider.component";
import ProductsSlider from "../components/products-slider.component";
import { ClubVelvete, featured_banner, refer } from "../assets/images";
import CombosSlider from "../components/combos-slider.component";
import OfferSlider from "../components/offer-slider.component";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            posts: [],
            head_insiders: {
                page_title: "Home",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
        };
    }

    componentDidMount() {
        // this.fetchPosts();
    }

    fetchPosts = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get('http://localhost:5555/posts', {
                headers: {
                    'Authorization': token
                }
            });
            this.setState({ message: response.data.message, posts: response.data.posts });
        } catch (error) {
            this.setState({ message: `Failed to load profile: ${error.response?.data?.message || error.message}` });
            this.props.navigate('/login');
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
                            <ProductsSlider heading="best sellers" />
                            <ProductsSlider heading="exclusive range launch" background="bg-dark" />

                            <div className="container-fluid px-4 my-5 pb-5">
                                <div class="seprated-heading pt-5 mt-5">CLUB VELLVETTE</div>
                                <div className="row offer-bg py-5" style={{letterSpacing:"2px"}}>
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

                            <ProductsSlider heading="MAKEUP KITS & COMBOS" background="bg-dark" />

                            <CombosSlider heading="EXCLUSIVE COMBO LAUNCHES" />

                            <OfferSlider heading="EXCLUSIVE TREATS" />

                            <CombosSlider heading="HOT DEALS" />
                            
                            <div className="container-fluid px-4 my-5">
                                <div class="seprated-heading pt-5 mt-5">REFER YOUR FRIENDS</div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                    <img src={refer} alt="Refer Friends" style={{width: "100%"}} />

                                    </div>
                                </div>
                            </div>

                            <ProductsSlider heading="SKINCARE BASICS" />
                            
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