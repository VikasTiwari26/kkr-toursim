import React, { Component } from 'react';
import { brahmSarovarTemple, icon } from '../../images/images';
import "./Home.css"


class Home extends Component {
    state = {  }
    render() { 
        console.log(icon)
        return ( 
            <div className="main-cntnr">
                <div className="title-cntnr">
                    <div className="title-text">
                        <h3>KURUKSHETRA</h3>
                        <p>
                        Kurukshetra is a city in the Indian state of Haryana.It is also known as Dharmakshetra ("Holy Place") and as the "Land of the Bhagavad Gita".The importance of the place is attributed to the fact that the Kurukshetra War of the Mahabharata is said to have taken place here.
                        </p>
                    </div>
                    <div className="title-image">
                        <img height="200px" width="300px" src={brahmSarovarTemple}/>
                    </div>
                </div>
                <div className="about-kkr-cntnr">
                <h1>About Kurukshetra</h1>
                   <div className="about-text-cntnr">
                   <div className="about-left">
                        <p>
                        The climate of the district varies as the temperature in summer reaches as high as 47 °C, and as low 1 °C in winter, with rains in July and August.
                        </p>
                        <p>
                        Kurukshetra is an important Hindu pilgrimage destination, and there are several pilgrimage sites surrounding the city.
                        </p>
                        <p>
                        The Hindi phrase 48 kos parikrama refers to a roughly 90-km traditional circle (Parikrama) around the holy city (1 kos equals about 3.00 km or 1.91 miles), and a complete parikrama refers to a pilgrimage to all these sites on foot.
                        </p>
                    </div>
                    <div className="about-right">
                        <p>
                        According to the Vamana Purana describes, King Kuru chose land at the banks of the now extinct Sarasvati River (believed to be dried up c. 1900 BCE) for embedding spirituality with eight virtues: austerity (Tapas), truth (Satya), forgiveness (Kshama) etc.
                        </p>
                        <p>
                        Lord Vishnu was impressed with the acts of King Kuru and blessed him with two boons—first, that this land forever will be known as a Holy Land after his name as Kurukshetra.
                        </p>
                        <p>
                        The land of Kurukshetra was situated between two rivers—the Sarasvati and the Drishadvati.
                        </p>
                    </div>
                </div>
                   </div>
            </div>
         );
    }
}
 
export default Home;