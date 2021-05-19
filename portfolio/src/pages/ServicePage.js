import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pagetitle="My Services"/>
                <ServiceSection/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;
