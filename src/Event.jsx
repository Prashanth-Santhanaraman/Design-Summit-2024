import bgimg from "./images/bg_img.jpg";
import './Event.css'
export default function Event({eventName}) {
  return (
    <div className="bg">
       <div className="container glass">
        <h1 className="eventNameStyle">{eventName}</h1>

        {/* <a class="codepen-button"><span>Start Coding</span></a> */}
       </div>
    </div>
  );
}
