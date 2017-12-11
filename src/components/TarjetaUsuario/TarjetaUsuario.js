import React, {Component} from 'react';
import './TarjetaUsuario.css'

export default class TarjetaUsuario extends Component{


  render(){
    console.log(this)
    return(
      <div className="tarjeta">
        <div className="nombre">{this.props.usuario.name.first}</div>
        <div className="apellido">{this.props.usuario.name.last}</div>
        <img src={this.props.usuario.picture.large}></img>
        <div className="username">{this.props.usuario.login.username}</div>
      </div>
    );
  }
}
