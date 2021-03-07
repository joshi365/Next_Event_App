import React from "react";
import classes from "./EventItem.module.css";
import Button from "../ReUsableComponents/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

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
            <DateIcon />
            <time>{data.date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAdres}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default EventItem;
