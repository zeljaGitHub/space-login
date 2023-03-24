import Background from "../src/assets/space-background.png";
import Spaceship from "../src/assets/spaceship.png";
import Stars from "./Stars";
import "./App.css";

function App() {
  return (
    <section>
      <img src={Background} alt="space-background" className="bg" />
      <Stars />
      <img src={Spaceship} alt="spaceship" className="spaceship" />
      <div className="login">
        <h2>Sign In</h2>
        <div className="input-box">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-box">
          <input type="submit" value="Login" id="btn" />
        </div>
        <div className="group">
          <a href="#">Forgot Password</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </section>
  );
}

export default App;
