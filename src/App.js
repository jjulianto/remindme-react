import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import Task from "./components/Task";
import Remind from "./components/Remind";
import Download from "./components/Download";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Home />
        <section>
          <div className="card-container container">
            <Card
              image="schedule"
              title="Set a better deadline tasks"
              description="You can make your duty deadlines better and more orderly"
            />
            <Card
              image="layer"
              title="Manage the tasks so easily"
              description="You can manage the deadlines and the schedule becomes easy"
            />
            <Card
              image="notification"
              title="Wouldn’t miss notifications"
              description="Of course you will always get the tasks and schedule notifications"
            />
          </div>
        </section>
        <Task />
        <Remind />
        <Download />
        <Testimonial />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
