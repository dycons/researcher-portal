import React from 'react';
import Table from './Table';

/*
This class is responsible for displaying Katsu clinical and phenotypic metadata.
*/
class Katsu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { individualsData: [], phenopacketsData: [] };
  }

  componentDidMount() {
    this.fetchIndividualsData()
    .catch(err => alert(err));

    this.fetchPhenopacketsData()
    .catch(err => alert(err));
  }

  /*
  Returns two Table components - the first one displays the data in the 
  individualsData variable of the state, and the second one displays the
  data in the phenopacketsData variable of the state.
  */
  render() {
    document.title = 'Katsu';

    return (
      <div>
        <Table data={this.state.individualsData} name='Individuals' />
        <Table data={this.state.phenopacketsData} name='Phenopackets' />
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