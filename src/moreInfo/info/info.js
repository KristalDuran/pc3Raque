/* App.js */
import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import info2015 from './../../INFO/2015.json';
import info2016 from './../../INFO/2016.json';
import info2017 from './../../INFO/2017.json';
import info2018 from './../../INFO/2018.json';
import info2019 from './../../INFO/2019.json';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Info extends React.Component {
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
        this.getInfo();
    }

    getInfo(){
        let data2015 = 0;
        let data2016 = 0;
        let data2017 = 0;
        let data2018 = 0;
        let data2019 = 0;
        info2015.forEach(info => {
            data2015 += info['Happiness Score'];
        });
        info2016.forEach(info => {
            data2016 += info['Happiness Score'];
        });
        info2017.forEach(info => {
            data2017 += info['Happiness Score'];
        });
        info2018.forEach(info => {
            data2018 += info['Happiness Score'];
        });
        info2019.forEach(info => {
            data2019 += info['Happiness Score'];
        });
        this.setState({year15: data2015/info2015.length, year16: data2016/info2016.length, year17: data2017/info2017.length, year18: data2018/info2018.length, year19: data2019/info2019.length })
    }

	render() {
        
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Felicidad mundial 2015-2019",
				size: '10px'
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
				type: "waterfall",
				xValueFormatString: "YYYY",
				yValueFormatString: "#0.000",
				dataPoints: [
                  { x: new Date("2015"), y: Number(this.state.year15)},
                  { x: new Date("2016"), y: Number(this.state.year16)},
                  { x: new Date("2017"), y: Number(this.state.year17)},
                  { x: new Date("2018"), y: Number(this.state.year18)},
                  { x: new Date("2019"), y: Number(this.state.year19)}
				]
			}]
		}
		
		return (
			<CanvasJSChart options = {options}/>
		);
	}
}
 
export default Info;   