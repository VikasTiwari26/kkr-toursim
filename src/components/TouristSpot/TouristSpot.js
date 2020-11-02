import React, { Component } from 'react';
import { touristSpotData } from '../../StaticData/staticData';
import "./TouristSpot.css"

class TouristSpot extends Component {
    state = { }
    componentDidMount = () =>{
        let spots = touristSpotData
        this.setState({spots})
    }
    render() { 
        return ( 
            <div className="tourist-main-cntnr">
                <h1>Tourist Spot</h1>
                <div className="data-cntnr">
                {this.state.spots && this.state.spots.map((item,index)=>(
                    <div className="about-place" key={index}>
                        <h2 className="heading-tourist-spot">{item.title}</h2>
                        <img/>
                        {item.about.map((data,index)=>(
                            <p className="about-txt" key={index+data}>{data}</p>
                        ))}
                    </div>
                ))}
                </div>
            </div>
         );
    }
}
 
export default TouristSpot;