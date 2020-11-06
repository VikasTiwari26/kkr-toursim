import React, { Component } from "react";
import { gitaJayantiPic1, gitaJayantiPic2 } from "../../images/images";
import ImageSlider from "../imageSlider/imageSlider";
import "./GeetaJayanti.css";

class GeetaJayanti extends Component {
  state = {};
  render() {
    return (
      <div className="main-gita-jynti-cntnr">
        <h2 className="title-gita-jynti">GEETA JAYANTI MAHOTSAV</h2>
        <div className="info-cntnr">
          <p className="about-gita-jynti">
            Gita Jayanti is the birthday of Bhagavad Gita, the sacred text of
            Hindus. It's celebrated on the Shukla Ekadashi, 11th day of waxing
            moon of Margashirsha month of the Hindu calendar. It is believed the
            "Bhagavad Gita" was revealed to Arjuna by Krishna Himself in the
            battlefield of Kurukshetra (in present-day Haryana, India).The text
            is written in the third person, narrated by Sanjaya to King
            Dhritarashtra as it transpired between Sri Krishna and Arjuna.
            Sanjaya, the secretary of the blind King Dhritarashtra, had been
            blessed by his Guru, Veda Vyasa, with the power to remotely view the
            events taking place on the battlefield as they transpired.
          </p>
          <div className="image-cntnr">
            <img src={gitaJayantiPic1} />
          </div>
          <div className="about-gita-jynti">
            <h4>Observed as:</h4>
            <ul className="info-list">
              <li>A craft fair is organized that lasts for about a week.</li>
              <li>
                The people participate in yajna, Gita reading, bhajans, aartis,
                dance, dramas, etc
              </li>
              <li>
                Over the years, the fair known as Gita Jayanti Samaroh has
                gained immense popularity and a large number of tourists &
                pilgrims visit Kurukshetra during the event to participate in
                this sacred gathering. Discussions and seminars by eminent
                scholars and Hindu priests to throw light upon the various
                facets of the holy book and its perennial influence on humankind
                for generations. Stage play and Gita chanting competitions are
                held for kids to show their talents as a way to encourage their
                interest in reading Gita. leaflets, pamphlets and books
                containing the essence of Gita are distributed to the public.
              </li>
            </ul>
            <h4>Observed By:</h4>
            <ul className="info-list">
              <li>Kurukshetra Development Board.</li>
              <li>Haryana Tourism.</li>
              <li>District Administration.</li>
              <li>Information and Public Relations Department, Haryana.</li>
            </ul>
          </div>
        </div>
        <div className="about-gita-jynti">
          <div className="competetions-org">
            <div className="image-cntnr">
              <img width="640px" src={gitaJayantiPic2} />
            </div>
            <h4>Competitons organised :</h4>
            <ul className="info-list">
              <li>Invitation Card Design Competition</li>
              <li>Pencil sketch drawing competition</li>
              <li>Clay modelling competition</li>
              <li>Fancy dress competition</li>
              <li>Collage making competition</li>
              <li>Rangoli Design competition</li>
              <li>Dance competition</li>
              <li>Act and drama competition</li>
            </ul>

            <p>
              A water laser show was introduced to International Gita Jayanti
              Mahotsav and people showed their love towards it very much. Whole
              gita updesh is narrated to the audience with the help of 3D sound
              effects and a video is project on water as a screen and also some
              artist play different characters on a stage which is totally in
              water.
            </p>
            <p className="links">
              You can have a glimpse of it{" "}
              <a
                className="laser-show"
                href="https://www.youtube.com/watch?v=lAQmwlG7yp4&t=8700&autoplay=1"
              >
                here
              </a>{" "}
              and for Haryanvi cultural Programs ,{" "}
              <a
                className="cultural-programs"
                href="https://www.youtube.com/watch?v=lAQmwlG7yp4&t=8700&autoplay=1"
              >
                click here
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeetaJayanti;
