import * as React from "react";
import {
    MapsComponent, Inject, LayersDirective, LayerDirective, MapsTooltip, Legend, Selection, Highlight
} from '@syncfusion/ej2-react-maps';
import datasource from './tooltip-datasource.json';
import world from './world-map.json';
    
export class Mapa extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        mapInstance: '',
        ver: false,
        pais: ''
    };
  }
  
  onMapsLoad(args) {
    let maps = document.getElementById('maps');
    maps.setAttribute('title', '');
  };
  
  tooltipRender(args) {
    this.setState({ver:!this.state.ver, pais:'args'})
    if (!args.options['data']) {
        args.cancel = true;
    }
  }

  onClick(info){
    this.props.onClick(info)
  }

  render(){
    return (
        <div className='control-pane'>
            <div className='control-section row'>
                <div className='col-md-1'>
                    <MapsComponent id="maps"
                        loaded={this.onMapsLoad.bind(this)} load={this.load} 
                        zoomSettings={{
                            enable: false
                        }}
                        legendSettings={{
                            visible: true,
                            mode: 'Interactive',
                            position: 'Left',
                            orientation: 'Vertical',
                            height: '70%',
                            width: '10',
                            textStyle: {
                                color: '#FA8072'
                            }
                        }}
                        shapeSelected={this.onClick.bind(this)}
                    >
                        <Inject services={[MapsTooltip,Selection, Highlight, Legend]} />
                        <LayersDirective>
                            <LayerDirective shapeData={world}
                                background='#FA8072'
                                highlightSettings={{
                                    enable: true,
                                    fill: '#8C1E0B'
                                }}
                                selectionSettings={{
                                    enable: true,
                                    fill: '#8C1E0B',
                                    opacity: 1
                                }}
                                shapePropertyPath='name'
                                shapeDataPath='name'
                                dataSource={datasource}
                                tooltipSettings={{
                                    visible: true,
                                    valuePath: 'name',
                                    template: '<div id="tooltemplate" style="width: 90px;background: #FF503D; opacity: 90%;background: #FF503D;box-shadow: 0px 2px 2px #FF503D;padding-bottom: 10px;padding-top: 10px;padding-left: 10px;padding-right: 10px;border: 1px #abb9c6">'+
                                        '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${country}</center></div>'+
                                        '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #FF503D">'+
                                        '<div><span style="font-size:13px;color:#cccccc">Puntuación : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${value1}</span></div>',
                                }}
                                shapeSelected={this.onClick.bind(this)}
                                shapeSettings={{
                                    fill: 'lightgrey',
                                    colorMapping: [
                                        {
                                            value: '1',
                                            color: '#F3D3CF'
                                        },
                                        {
                                            color: '#F1B4AD',
                                            value: '2'
                                        },
                                        {
                                            color: '#F19D93',
                                            value: '3'
                                        },
                                        {
                                            color: '#EE8B80',
                                            value: '4'
                                        },
                                        {
                                            color: '#EE7668',
                                            value: '5'
                                        },
                                        {
                                            color: '#ED6454',
                                            value: '6'
                                        },
                                        {
                                            color: '#E81E07',
                                            value: '7'
                                        }
                                    ],
                                    colorValuePath: 'value1'
                                }}
                            >
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
            </div>
        </div>
    );
    }
}

export default Mapa;