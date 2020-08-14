import React from 'react';
import './App.css';
import Mapa from './mapa';
import data from './tooltip-datasource.json'
import { Button } from '@material-ui/core';
import world from './world-map.json';
import Data from './graph';
import DataPie from './dataPie';

import Storytelling from './moreInfo/index';

export class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ver: false,
      pais: null,
      paisInfo: {},
      storytelling: false
    };
    this.mapRef = React.createRef();
  }

  convert(){
    var m = data;
    m.forEach(function(p){
          p.value1= `${p.value1}`;
    });
  }

  onClick(info){
    let listCountries = world.features;
    listCountries.forEach(country => {
      if (country.properties.name === info.data.name) {
        
        this.setState({paisInfo: {
          "type": "FeatureCollection",
          "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
          "features": [
              country,
          ]}});
      }
    });
    this.setState({ pais:info.data.name})
    // console.log(this.state.pais);
  }

  onClick2(){
    this.setState({ pais:null})
  }

  onClickStorytelling(){
    this.setState({storytelling:!this.state.storytelling})
  }

  render(){
    this.convert();
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-back">
            {this.state.pais ? (
            <div className='App-infoPais'>
              {/* <div className="data"> */}
              <Button
                className='back'
                variant="contained"
                color="default"
                onClick={this.onClick2.bind(this)}
              >
                {'<'}
              </Button>
              <p className="App-info">{this.state.pais}</p>
              <p >Los siguientes gráficos muestran los resultados de las evaluaciones sobre la felicidad en la población:</p>
              {/* </div> */}
              <div className='App-data'>
                <div className='App-header-bajar'></div>
                <Data countryName={this.state.pais}></Data>
                <DataPie countryName={this.state.pais}></DataPie>
              </div>
            </div>
          ):(
            <div className="App-mapa">
              <p className="App-info">Sensos felicidad año 2018</p>
              <p className="infoFelicidad">La felicidad comenzó a medirse de forma sistemática en 1972 en el reino de Bután, donde se inventó el Índice Nacional de Felicidad.</p>
              <Button
                className='App-button'
                variant="contained"
                color="default"
                onClick={this.onClickStorytelling.bind(this)}
              >
                
                {!this.state.storytelling ? 
                ('Ver más.'):
                ('Ver menos.')
              }
              </Button>
              {this.state.storytelling && 
                <Storytelling></Storytelling>
              }
              <Mapa className='App-map' onClick={this.onClick.bind(this)}></Mapa>
            </div>
          )}
          </div>
        </header>
      </div>
    );
    }
}

export default App;
