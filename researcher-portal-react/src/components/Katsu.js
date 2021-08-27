import React from 'react';
import Table from './Table';
import { ButtonGroup, Button } from 'reactstrap';
import BarChart from './BarChart';

/*
This class is responsible for displaying Katsu clinical and phenotypic metadata.
*/
class Katsu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showChart: true, individualsData: [], phenopacketsData: [] };
  }

  /*
  Sets the showChart variable in the state to the value of parameter newStatus.
  Parameter newStatus is a boolean.
  */
  showChartStatus(newStatus) {
    this.setState({ showChart: newStatus });
  }

  componentDidMount() {
    this.fetchIndividualsData()
    .catch(err => alert(err));

    this.fetchPhenopacketsData()
    .catch(err => alert(err));
  }

  /*
  Returns two buttons with a callback on click that sets the value of showChart 
  in the state. The value depends on which button was clicked.
  If the showChart variable in the state is true, returns a BarChart component 
  that displays distribution of diseases by ethnicity in a stacked bar chart.
  If the showChart variable in the state is false, returns two Table components
  that display the individualsData variable of the state and the phenopacketsData 
  variable of the state.
  */
  render() {
    document.title = 'Katsu';
    const buttons = <ButtonGroup>
      <Button onClick={() => this.showChartStatus(true)}>Chart</Button>
      <Button onClick={() => this.showChartStatus(false)}>Table</Button>
    </ButtonGroup>;

    let dataToDisplay;
    if (this.state.showChart) {
      dataToDisplay = <BarChart phenopacketsData={this.state.phenopacketsData} individualsData={this.state.individualsData} />;
    } else {
      dataToDisplay = <div>
        <Table data={this.state.individualsData} name='Individuals' />
        <Table data={this.state.phenopacketsData} name='Phenopackets' />
      </div>;
    }

    return (
      <div>
        {buttons}
        {dataToDisplay}
      </div>
    );
  }

  /*
  Fetches data of 10 individuals from the /api/individuals endpoint of 
  the Katsu service. 
  Sets the individualsData variable in the state to this data.
  */
  async fetchIndividualsData() {
    const url = 'http://localhost:8000/api/individuals?page_size=10';
    const headers = {
      'x-candig-ext-rems': JSON.stringify(this.props.entitlements)
    };

    const response = await fetch(url, { headers: headers });
    if (response.ok) {
      const json = await response.json();
      const results = json.results === undefined ? [] : json.results;
      this.setState({ individualsData: results });
    }
    else {
      throw Error('Invalid response status code');
    }
  }

  /*
  Fetches data of 10 phenopackets from the /api/phenopackets endpoint of 
  the Katsu service. 
  Sets the phenopacketsData variable in the state to this data.
  */
  async fetchPhenopacketsData() {
    const url = 'http://localhost:8000/api/phenopackets?page_size=10';
    const headers = {
      'x-candig-ext-rems': JSON.stringify(this.props.entitlements)
    };

    const response = await fetch(url, { headers: headers });
    if (response.ok) {
      const json = await response.json();
      const results = json.results === undefined ? [] : json.results;
      this.setState({ phenopacketsData: results });
    }
    else {
      throw Error('Invalid response status code');
    }
  }
}

export default Katsu;