import React from "react";

const moreInfo = "Объём включённого трафика не ограничен";

export default function Tariffcard(props) {
  const classCard = props.isSelected ? "tariff-card_selected" : "";
  return (
    <div className={`card ${classCard}`} onClick={props.onClick}>
      <div className={`card-header ${props.theme.card_header}`}>
        Безлимитный {props.price}
      </div>
      <div className={`card-price ${props.theme.card_price}`}>
        <p className="card-currency">руб</p>
        <p className="card-price">{props.price}</p>
        <p className="card-date">/мес</p>
      </div>
      <div className="card-speed">до {props.speed}Мбит/сек</div>
      <div className="card-footer">{moreInfo}</div>
    </div>
  );
}
