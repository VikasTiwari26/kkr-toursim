import axios from 'axios';
import React, { Component } from 'react';
import api from '../../api/Api';
import PieChart from '../../utils/piechart';
import XYChart from '../../utils/XYchart';

class Covid extends Component {
    state = { 
     }


    componentDidMount =() =>{
        this.getCovidDistrictData()
        this.getCovidNationWiseData()
    }
    getCovidDistrictData = async() =>{
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

    getCovidNationWiseData = async()=>{
        try {
            const response = await axios.get(api.covidIndiaStatus)
            // console.log(response.data.cases_time_series)
            // console.log(response.data.cases_time_series[response.data.cases_time_series.length-1])
            let nationalCovidData = response.data.cases_time_series.map(item=>{
                let obj = {}
                obj.date = new Date(item.dateymd)
                obj.value = parseInt(item.dailyconfirmed)
                return obj
            })
            let totalNationWiseCases =  response.data.cases_time_series[response.data.cases_time_series.length-1].totalconfirmed
            // console.log(nationalCovidData)
            // console.log(totalNationWiseCases)
            this.setState({nationalCovidData,totalNationWiseCases})
        } catch (err) {
            console.log(err)
        }
    }
    render() { 
        return ( 
            <div>
                Covid-19
                {
                   this.state.nationalCovidData && <div className="xychart-container">
                       <h2>Total Cases:{this.state.totalNationWiseCases}</h2>
                       <XYChart covidData = {this.state.nationalCovidData}/>
                   </div>
               }
                {this.state.covidCases &&  <div className="piechart-container">
                <h2>Total Cases: {this.state.covidCases.confirmed}</h2>
                    <PieChart 
                        active={this.state.covidCases.active} 
                        deaths={this.state.covidCases.deceased} 
                        recovered={this.state.covidCases.recovered}
                    />
               </div>}
               
            </div>
         );
    }
}
 
export default Covid;