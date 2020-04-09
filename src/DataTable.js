import React, {Component} from 'react';

class DataTable extends Component {


render() {
    const {data} = this.props;

    return (
        <div>
            <h3>Data Table</h3>
            <table className="table table-responsive">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>CO2 Conc.</td>
                    <td>CO2 Emiss.</td>
                    <td>Temp &deg;C</td>
                    <td>Temp &deg;F</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => (
                   <tr key={i}>
                       <td>{(item.year).getFullYear()}</td>
                       <td>{item.co2Concentration}</td>
                       <td>{item.co2Emissions}</td>
                       <td>{item.tempC}</td>
                       <td>{item.tempF}</td>
                   </tr>)
                )}
            </tbody>
            
            </table>
        </div>
    );
}


}

export default DataTable;