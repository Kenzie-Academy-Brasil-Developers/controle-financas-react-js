import LandingWelcome from "../LandingWelcome";
import "./style.css";

function LandingPage({ handler }) {
  return (
    <div className="landing-page">
      <LandingWelcome setLoggedIn={handler} />
      <figure className="landing__bg-figure"></figure>
    </div>
  );
}

export default LandingPage;
