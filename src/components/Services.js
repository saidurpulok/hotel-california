import React, { Component } from 'react';
import {FaCocktail,FaShuttleVan, FaHotel, FaAccessibleIcon} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<h2><FaHotel /></h2>,
                title:"Best Experience",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<h2><FaAccessibleIcon /></h2>,
                title:"For Everyone",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<h2><FaShuttleVan /></h2>,
                title:"Free Transit",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<h2><FaCocktail /></h2>,
                title:"Rich Food & Drinks",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <h3 className="my-4 font-weight-light text-black text-center">Welcome to Hotel California, an amazing experience for you.</h3>    
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
