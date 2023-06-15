import { Row, Col } from "react-bootstrap";
import Noticias from "./Noticias";

const ListaNoticias = ({ noticia }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      { noticia.length === 0 ? <p className="lead">No se encontraron resultados</p> 
      :( noticia.map((articulo, index) => (
        <Col key={index}>
          <Noticias titulo={articulo.title} descripcion={articulo.description} imagen={articulo.image_url} url={articulo.link}></Noticias>
        </Col>
      )))}
    </Row>
  );
};

export default ListaNoticias;
