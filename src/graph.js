/* App.js */
import React from 'react';
import CanvasJSReact from './canvasjs.react';
import info2015 from './INFO/2015.json';
import info2016 from './INFO/2016.json';
import info2017 from './INFO/2017.json';
import info2018 from './INFO/2018.json';
import info2019 from './INFO/2019.json';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state={
            year15: 0,
            year16: 0,
            year17: 0,
            year18: 0,
            year19: 0
        }
    }

    componentDidMount(){
        this.getInfo(this.props.countryName);
    }

    getInfo(country){
        info2015.forEach(info => {
            if (info.Country === country) {
                this.setState({year15:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2016.forEach(info => {
            if (info.Country === country) {
                this.setState({year16:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2017.forEach(info => {
            if (info.Country === country) {
                this.setState({year17:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2018.forEach(info => {
            if (info.Country === country) {
                this.setState({year18:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2019.forEach(info => {
            if (info.Country === country) {
                this.setState({year19:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
    }

	render() {
        
		const options = {
			animationEnabled: true,
			theme: "light",
			title:{
				text: "Felicidad 2015-2019"
			},
			axisX:{
				valueFormatString: "YYYY",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "Valor",
				includeZero: false,
				valueFormatString: "#0.000",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return CanvasJS.formatNumber(e.value, "#0.000");
					}
				}
			},
			data: [{
				type: "splineArea",
		        // showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#0.000",
				dataPoints: [
                  { x: new Date("2015"), y: Number(this.state.year15.happiness)},
                  { x: new Date("2016"), y: Number(this.state.year16.happiness)},
                  { x: new Date("2017"), y: Number(this.state.year17.happiness)},
                  { x: new Date("2018"), y: Number(this.state.year18.happiness)},
                  { x: new Date("2019"), y: Number(this.state.year19.happiness)}
				]
			}]
		}
		
		return (
			<CanvasJSChart options = {options}/>
		);
	}
}
 
export default Graph;   