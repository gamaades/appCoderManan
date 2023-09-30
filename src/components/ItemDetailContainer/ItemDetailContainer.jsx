import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetailContainer.module.css'; // Importa el archivo CSS personalizado

const ItemDetailContainer = ({productData}) => {
  const formatoMoneda = productData.price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP', // Puedes cambiar 'CLP' por el código de moneda deseado (por ejemplo, 'CLP' para dólares)
  });
    return (
      <div className="container-center">
        <Card className="card-container">
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{formatoMoneda}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <ItemCount />
          </Card.Body>
        </Card>
      </div>
    );
  };
  
  export default ItemDetailContainer;