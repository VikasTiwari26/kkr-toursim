import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api/Api";
import PieChart from "../../utils/piechart";
import XYChart from "../../utils/XYchart";
import "./Covid.css";

class Covid extends Component {
  state = {};

  componentDidMount = () => {
    this.getCovidDistrictData();
    this.getCovidNationWiseData();
  };
  getCovidDistrictData = async () => {
    try {
      const response = await axios.get(api.districtWiseCases);
      let covidHaryana = response.data.filter(
        (item) => item.state === "Haryana"
      );
      let covidCasesInKurukshetra = covidHaryana[0].districtData.filter(
        (item) => item.district === "Kurukshetra"
      );
      console.log(covidCasesInKurukshetra);
      this.setState({ covidCases: covidCasesInKurukshetra[0] });
    } catch (err) {
      console.log(err);
    }
  };

  getCovidNationWiseData = async () => {
    try {
      const response = await axios.get(api.covidIndiaStatus);
      // console.log(response.data.cases_time_series);
      // console.log(response.data.cases_time_series[response.data.cases_time_series.length-1])
      let nationalCovidData = response.data.cases_time_series.map((item) => {
        let obj = {};
        obj.date = new Date(item.dateymd);
        obj.value = parseInt(item.dailyconfirmed);
        return obj;
      });
      let totalNationWiseCases =
        response.data.cases_time_series[
          response.data.cases_time_series.length - 1
        ].totalconfirmed;
      // console.log(nationalCovidData);
      // console.log(totalNationWiseCases)
      this.setState({ nationalCovidData, totalNationWiseCases });
    } catch (err) {
      console.log(err);
    }
  };

  formatNumberWithComma = (x) => {
    x = x.tostring().replace(/B(?=(d{3})+(?!d))/g, ",");
  };

  render() {
    return (
      <div>
        <h3>Tourism After COVID-19</h3>
        <div className="div1">
          <p>
            Global tourism came to a grinding halt a few months ago before
            images of hurried travellers returning home on last-minute flights
            flooded our screens, and eventually everything came to a complete
            standstill. Vacant airports, deserted streets, and silent theme
            parks became the new normal.
          </p>
          <p>
            The COVID-19 pandemic changed the world in more ways than one. There
            is hardly anyone who hasn’t been affected by the crisis in some way
            or the other, seeing as lockdowns and border closures have sealed
            off entire countries and the travel industry has been dealt a brutal
            blow. It could take years to return to normal. Discussions on
            sustainable tourism have been screamed from rooftops till the voices
            grew hoarse but to no avail. However, the pandemic brings a silver
            lining for tourism and a hope that the way forward will lead to a
            change in how authorities manage over-tourism.
          </p>
        </div>
        {this.state.nationalCovidData && (
          <div className="xychart-container">
            <h2>Total Cases:{this.state.totalNationWiseCases}</h2>
            <XYChart covidData={this.state.nationalCovidData} />
          </div>
        )}
        <div className="precautions">
          <h3>General Precautions During Travelling</h3>
          <p>
            It is prudent for travellers who are sick to delay or avoid travel
            to affected areas, in particular for elderly travellers and people
            with chronic diseases or underlying health conditions. General
            recommendations for personal hygiene, cough etiquette and keeping a
            distance of at least one metre from persons showing symptoms remain
            particularly important for all travellers. These include:
          </p>
          <p>
            • Perform hand hygiene frequently, particularly after contact with
            respiratory secretions. Hand hygiene includes either cleaning hands
            with soap and water or with alcohol-based hand rub. Alcohol-based
            hand rubs are preferred if hands are not visibly soiled; wash hands
            with soap and water when they are visibly soiled;
          </p>
          <p>
            • Cover your nose and mouth with a flexed elbow or paper tissue when
            coughing or sneezing and disposing immediately of the tissue and
            performing hand hygiene;
          </p>
          <p>
            • A medical mask is not required if exhibiting no symptoms, as there
            is no evidence that wearing a mask – of any type – protects non-sick
            persons. However, in some cultures, masks may be commonly worn.If
            masks are to be worn, it is critical to follow best practices on how
            to wear, remove and dispose of them and on hand hygiene after
            removal.
          </p>
        </div>
        {this.state.covidCases && (
          <div className="piechart-container">
            <h2>Total Cases: {this.state.covidCases.confirmed}</h2>
            <PieChart
              active={this.state.covidCases.active}
              deaths={this.state.covidCases.deceased}
              recovered={this.state.covidCases.recovered}
            />
          </div>
        )}
        <div className="kkrCovid">
          <p>
            During the initial stages of lockdown , every tourist spot was
            closed and no one was allowed to visit ; even the local residents of
            kurukshetra. But as soon as different stages of "Unlock" came ,
            tourist spots were opened for people so that they can enjoy.
          </p>
          <p>
            But as there are 2 sides of every coin , people started to visit
            places without any face masks and gloves , avoiding social
            distancing with each other. So department took strict actions
            against such people and as a result situation has improved but still
            there are so many people who are not taking Precautions and risking
            there life and others too.
          </p>
          <p>
            Right now there are many active cases(refer graph) , so all tourist
            places are open for all , one can visit and enjoy wonderful vibes
            but must follow all safety precautions like ,
          </p>
          <ul className="precList">
            <li>Wear a face mask</li>
            <li>Maintain social distancing</li>
            <li>Must pay attention to cleanliness of the surroundings</li>
            <li>Do not litter waste here and there</li>
            <li>Regularly wash hands with soap or alcohol-based sanitizer.</li>
          </ul>
          <p className="GitaJayanti">
            There are very less chances that kurukshetra Development Board (KDB)
            will organise Gita Jayanti Mahotsav 2020 but they will try to find
            out a way so that event can be organised with proper guidelines. To
            know more about this <Link to="/contact">Contact Us</Link> .
          </p>
        </div>
      </div>
    );
  }
}

export default Covid;
