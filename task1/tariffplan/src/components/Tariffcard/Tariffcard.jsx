import React from "react";

const moreInfo = "Объём включённого трафика не ограничен";

function Tariffcard(props) {
  return (
    <div className={props.isSelected ? "tariff-card_selected" : "tariff-card"}>
      <div className="card-header">
        <h2>Безлимитный {props.price}</h2>
      </div>
      <div className="card-main">
        <section className="card-price">
          <p className="card-currency">руб</p>
          <p className="card-price">{props.price}</p>
          <p className="card-date">/мес</p>
        </section>
        <section className="card-speed">до {props.speed} Мбит/сек.</section>
      </div>
      <div className="card-footer">{moreInfo}</div>
    </div>
  );
}

export default Tariffcard;
