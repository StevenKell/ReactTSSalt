import React from 'react'; import * as d3 from 'd3';

interface IBarChartProps { data: number[]; }

class BarChart extends React.Component { private chartRef = React.createRef();

componentDidMount() { const data = this.props.data; const width = 400; const height = 300; const svg = d3 .select(this.chartRef.current) .attr('width', width) .attr('height', height);

const xScale = d3.scaleBand().range([0, width]).domain(data.map((d, i) => i));
const yScale = d3.scaleLinear().range([height, 0]).domain([0, Math.max(...data)]);

svg
  .selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (d, i) => xScale(i))
  .attr('y', (d) => yScale(d))
  .attr('width', xScale.bandwidth())
  .attr('height', (d) => height - yScale(d));
}

render() { return ; } }

export default BarChart;