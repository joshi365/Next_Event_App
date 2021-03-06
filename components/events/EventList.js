import React from "react";
import EventItem from "./eventItem";
import classes from "./EventList.module.css";

const EventList = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map((event) => (
        <div key={event.id}>
          <EventItem data={event} />
        </div>
      ))}
    </ul>
  );
};

export default EventList;
