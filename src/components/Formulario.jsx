import ListaNoticias from "./ListaNoticias";
import { Form } from "react-bootstrap";
import { useEffect, useState } from 'react';

const Formulario = () => {
    const [noticia, setNoticia] = useState([]);
    const [categoria, setCategoria] = useState('');
    
    useEffect(()=>{
        consultarAPI();
    },[categoria]);

    const consultarAPI = async () =>{
        try {
            const respuesta = await fetch(`https://newsdata.io/api/1/archive?apikey=pub_244223a06629742195086d5f075617f227976&category=${categoria || 'business'} `);
            const dato = await respuesta.json();
            console.log(dato);
            setNoticia(dato.results);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <div className="container border-1 py-3 border border-black">
      <div className="row">
      <div className="col-4 pt-2">
        <h6>Buscar por categoría: </h6>
      </div>
      <div className="col-8">
        <Form.Select value={categoria} onChange={(e)=> setCategoria(e.target.value)} categoria={categoria}>
          <option value="">Seleccione </option>
          <option value="business">Empresas</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="environment">Ambiente</option>
          <option value="food">Comida</option>
          <option value="health">Salud</option>
          <option value="politics">Politica</option>
          <option value="science">Ciencia</option>
          <option value="sports">Deporte</option>
          <option value="technology">Tecnologia</option>
          <option value="top">Top</option>
          <option value="tourism">Turismo</option>
          <option value="world">Mundo</option>
        </Form.Select>
      </div>
    </div>
      </div>
      <div className="container border-1 py-3 border border-black">
        <ListaNoticias noticia={noticia}></ListaNoticias>
      </div>
    </>
  );
};

export default Formulario;
