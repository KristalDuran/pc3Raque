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

class DataPie extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state={
            i2015: {},
            i2016: {},
            i2017: {},
            i2018: {},
            i2019: {}
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.getData(this.props.countryName);
    }

    getData(country){
        info2015.forEach(info => {
            if (info.Country === country) {
                this.setState({i2015:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2016.forEach(info => {
            if (info.Country === country) {
                this.setState({i2016:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2017.forEach(info => {
            if (info.Country === country) {
                this.setState({i2017:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2018.forEach(info => {
            if (info.Country === country) {
                this.setState({i2018:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2019.forEach(info => {
            if (info.Country === country) {
                this.setState({i2019:{happiness: info['Happiness Score'], heald: info.Health}})
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
				type: "pie",
		        startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
				dataPoints: [
                  { label: new Date("2015").getFullYear(), y: Number(this.state.i2015.happiness)},
                  { label: new Date("2016").getFullYear(), y: Number(this.state.i2016.happiness)},
                  { label: new Date("2017").getFullYear(), y: Number(this.state.i2017.happiness)},
                  { label: new Date("2018").getFullYear(), y: Number(this.state.i2018.happiness)},
                  { label: new Date("2019").getFullYear(), y: Number(this.state.i2019.happiness)}
				]
			}]
		}
		
		return (
			<CanvasJSChart options = {options} className='App-data'/>
		);
	}
}
 
export default DataPie;   