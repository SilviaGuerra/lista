import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListaUsuario from './components/ListaUsuario/ListaUsuario';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      openModal: false,
      loading: true,
      user: 0,
      data: []
    };


  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=30')
      .then((response) => {
        return response.json()
      }).then((data)=>{
        console.log(data)
        this.setState({
          data: data.results,
          loading: false
        })
      })
  }

  render() {
    if(this.state.loading){
      return(
        <div className="App">
          Cargando
        </div>
      )
    }else{
      return (
        <ListaUsuario lista={this.state.data}/>
      );
    }
  }
}

export default App;
