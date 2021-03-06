import React from "react";
import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../ReUsableComponents/Button";

const EventItem = ({ data }) => {
  const readableDate = new Date(data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdres = data.location.replace(",", "\n");

  const exploreLink = `/events/${data.id}`;

  return (
    <React.Fragment>
      <li className={classes.item}>
        <img className={classes.main_image} src={data.image} alt="imga" />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{data.title}</h2>
          </div>
          <div className={classes.date}>
            <time>
              <b>Date: </b> {data.date}
            </time>
          </div>
          <div className={classes.adress}>
            <address>
              <b>Place: </b>
              {formattedAdres}
            </address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>Explore Event</Button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default EventItem;
