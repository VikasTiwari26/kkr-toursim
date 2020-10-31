import axios from 'axios';
import React, { Component } from 'react';
import api from '../../api/Api';

class Covid extends Component {
    state = { 
        covidCases:""
     }


    componentDidMount =async() =>{
        try {
            const response = await axios.get(api.districtWiseCases)
            let covidHaryana = response.data.filter(item=>item.state==="Haryana")
            let covidCasesInKurukshetra = covidHaryana[0].districtData.filter(item=>item.district==="Kurukshetra")
            console.log(covidCasesInKurukshetra)
            this.setState({covidCases:covidCasesInKurukshetra[0]})
        } catch (err) {
            console.log(err)
        }
    }

    render() { 
        return ( 
            <div>
                Covid-19
            </div>
         );
    }
}
 
export default Covid;