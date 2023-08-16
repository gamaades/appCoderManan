import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartWidget.module.scss";
const CartWidget = ({greeting}) => {
  return (
    <div className={styles.cartContainer}>
      <FontAwesomeIcon icon={faCartShopping} />
      <strong> {greeting} </strong>
    </div>
  );
};

export default CartWidget;