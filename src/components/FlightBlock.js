import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export function FlightBlock(props) {
  var available = props.no_of_seats - props.no_of_booked_seats;
  var d = new Date(props.flys_at);
  var h=d.getHours();
  var m=d.getMinutes();
  console.log(d);
  console.log(h);
  console.log(m);

  return (
    <div className="flight-block ">
        <div className="flight-block-picture">
        <img src={require("../img/preuzmi.png")} height="250" width="250" />
        </div>
        <div className="flight-block-content">
            <p><b>Departs at {h}:{m}</b></p>
            <p>{props.name}</p>
            <p><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><span className="grayTxt">  |  {props.no_of_seats} tickets available </span></p>
            <p> <b>Price <span className="blueTxt">{props.base_price}$</span></b></p>
        </div>

    </div>
  );
};
