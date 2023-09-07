import { Button } from "react-bootstrap";

const ButtonComponent = ({ label, bsButtonType, onClickFunction }) => {
    return <Button variant={bsButtonType} onClick={onClickFunction}>{label}</Button>;
};

export default ButtonComponent;