import React from "react";
import { Card, Button } from "react-bootstrap";

const Noticias = ({titulo, descripcion, imagen, url}) => {
  return (
    <div>
      <Card className="card h-100">
        <Card.Img variant="top" src={imagen || `https://picsum.photos/200/100`} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <a href={url}>
            <Button variant="primary">Ver noticia completa</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticias;
