import React, {Component} from 'react';
import TarjetaUsuario from '../TarjetaUsuario/TarjetaUsuario';
import './ListaUsuario.css'

export default class ListaUsuarios extends Component{
  render(){

    const lista = this.props.lista.map((usuario, index) => {
      return(<TarjetaUsuario key={index} usuario={usuario}/>)
    })
    return(
      <div>{lista}</div>
    );
  }
}
