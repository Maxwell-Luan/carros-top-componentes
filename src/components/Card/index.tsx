import "./styles.css";
import carImg from "../../assets/car.png";
import BuyButton from "../BuyButton";

export default function Card() {
  return (
    <>
      <div className="lm-card">
        <div>
          <img src={carImg} alt="carro" />
        </div>
        <div className="lm-card-description">
            <h3>Audi Supra TT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <div className="lm-card-button">
            <BuyButton/>
        </div>
        </div>
      </div>
    </>
  );
}
