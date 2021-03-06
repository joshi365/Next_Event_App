import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../Data/dummyData";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList data={featuredEvents} />
    </div>
  );
}

export default Home;
