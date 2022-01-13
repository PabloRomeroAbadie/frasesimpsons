import React from 'react';
import logo from"../img/logo.png";
import Button from 'react-bootstrap/Button';

const Titulos = () => {
    return (
        <div className=" d-flex flex-column align-items-center mt-5">
        <img src={logo} alt="logo simpsons" />
        <Button type="submit" className="my-3" variant="warning">Obtener Frase</Button>
        </div>
    );
};

export default Titulos;