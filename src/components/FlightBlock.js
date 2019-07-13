import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export function FlightBlock(props) {
  var available = props.no_of_seats - props.no_of_booked_seats;

  return (
    <div className="flight-block ">
        <div className="flight-block-picture">
        <img src={require("../img/preuzmi.png")} height="250" width="250" />
        </div>
        <div className="flight-block-content">
            <p><b>Departs at {props.flys_at}</b></p>
            <p>{props.name}</p>
            <p>Price : {props.base_price}$</p>
            <p><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} />| {props.no_of_seats} tickets available </p>
        </div>

    </div>
  );
};
