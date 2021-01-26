import React from 'react';

/*
This class is responsible for displaying Katsu clinical and phenotypic metadata.
*/
class Katsu extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  /*
  Fetches data from the /api/individuals endpoint of the Katsu service
  and modifies it to only keep the id and updated fields. Sets the data
  variable in the state to this data.
  */
  componentDidMount() {
    fetch('http://localhost:8000/api/individuals')
      .then(response => response.json())
      .then(jsonData => jsonData.results)
      .then(results => results.map(result => {
        const newResult = {};
        newResult.id = result.id;
        newResult.updated = result.updated;
        return newResult;
      }))
      .then(finalResults => this.setState({ data: finalResults }))
      .catch(err => alert(err));
  }

  /*
  Returns a table displaying the information in the data variable 
  of the state.
  */
  render() {
    document.title = 'Katsu';

    const tableRows = this.state.data.map(data => {
      return (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.updated}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default Katsu;