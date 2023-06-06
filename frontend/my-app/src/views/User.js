import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import '../CSS/user.css'

function User() {
  return (
    <React.Fragment>
    <section>
      <div className="layout text-2xl text-white">
        
        <div className="content2 centered">
                <h1>Perfil Publico</h1><br></br>
        <p>Añade informacion sobre ti</p>
        </div>
        <div className="content3 centered">
        
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Informacion Basica</Form.Label>
        </Form.Group>



      .coolinput
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="MENDIA" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="SOTO" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="DEMECIO GILBERTO" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="MENDIA" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="SOTO" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        
        <div className="content8 centered">
        <ListGroup>
        <ListGroup.Item>        <h1>DEMECIO GILBERTO SOTO MENDIA</h1>
</ListGroup.Item>

      <ListGroup.Item> <a>Ver Perfil Publico</a> </ListGroup.Item>
      <ListGroup.Item>Mi perfil</ListGroup.Item>
      <ListGroup.Item>Fotografia</ListGroup.Item>
      <ListGroup.Item>Notificaciones</ListGroup.Item>
      <ListGroup.Item>Cerrar cuenta</ListGroup.Item>
    </ListGroup>
        </div>
      </div>
    </section>
  </React.Fragment>
  );
}

export default User