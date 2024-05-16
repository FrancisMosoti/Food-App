import { Fragment } from "react";
import imageMeal from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartBtn onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageMeal} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
