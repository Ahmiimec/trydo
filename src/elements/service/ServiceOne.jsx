import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Website / WebApp Developement',
        description: 'Offering building and maintenance of websites and help perform well with a seamless user experience'
    },
    {
        icon: '02',
        title: 'UI / UX ',
        description: 'Creating user-centered designs by understanding business requirements, and user feedback'
    },
    {
        icon: '03',
        title: 'Marketing & Branding',
        description: `Offering a long-term, strategic plan to continuously boost a brand's recognition and reputation.`
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;