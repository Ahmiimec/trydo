import React, { Component } from "react";
// import { RiShoppingBag2Fi } from "react-icons/fi";
import { GiRollingEnergy } from "react-icons/gi"
import { SiAmazonaws, SiMaterialdesign } from "react-icons/si"
import { RiShoppingBag2Line } from "react-icons/ri"

const ServiceList = [
    {
        icon: <RiShoppingBag2Line />,
        title: 'Branding',
        description: 'Growth marketing and generating innovation in branding and marketing strategies.'
    },
    {
        icon: <SiMaterialdesign />,
        title: 'UI/UX',
        description: 'Designing and developing complex UI/UX based on modern design practices.'
    },
    {
        icon: <SiAmazonaws />,
        title: 'WebApp/Mobile Developement',
        description: 'Creating WebApps using latest stack technologies '
    },
    {
        icon: <GiRollingEnergy />,
        title: 'Animation/Motion Graphics',
        description: 'Utilizing motion graphics and design to create smooth animations'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We cater to work in the following domains';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    {/* <a href="/service-details"> */}
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    {/* </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
