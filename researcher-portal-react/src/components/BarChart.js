import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import addNoDataModule from 'highcharts/modules/no-data-to-display';

function BarChart(props) {
  addNoDataModule(Highcharts);

  const options = {
    credits: {
      enabled: false
    },
    title: {
      text: 'Distribution of Diseases by Ethnicity'
    },
    lang: {
      noData: "No Data Available"
    },
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total number of people with disease'
      }
    },
    series: []
  };

  const ethnicities = getEthnicities(props.individualsData);
  options.xAxis.categories = ethnicities;
  const diseases = getDiseases(props.phenopacketsData);
  const ethnicitiesToDiseases = getDiseasesByEthnicity(ethnicities, diseases, props.phenopacketsData);

  const seriesData = [];
  for (let i = 0; i < diseases.length; i++) {
    const disease = diseases[i];
    const diseaseData = {
      name: disease,
      data: []
    };
    for (let j = 0; j < ethnicities.length; j++) {
      const ethnicity = ethnicities[j];
      const ethnicityCount = ethnicitiesToDiseases.get(ethnicity).get(disease);
      diseaseData.data.push(ethnicityCount);
    };
    seriesData.push(diseaseData);
  };
  options.series = seriesData;

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

function getEthnicities(individualsData) {
  const ethnicities = new Set();
  for (let i = 0; i < individualsData.length; i++) {
    const individual = individualsData[i];
    ethnicities.add(individual.ethnicity);
  };
  const ethnicitiesList = [...ethnicities];
  return ethnicitiesList;
}

function getDiseases(phenopacketsData) {
  const diseases = new Set();
  for (let i = 0; i < phenopacketsData.length; i++) {
    const phenopacket = phenopacketsData[i];
    for (let j = 0; j < phenopacket.diseases.length; j++) {
      const disease = phenopacket.diseases[j];
      diseases.add(disease.term.id);
    };
  };
  const diseasesList = [...diseases];
  return diseasesList;
}

function getDiseasesByEthnicity(ethnicitiesList, diseasesList, phenopacketsData) {
  const ethnicitiesToDiseases = new Map();
  for (let i = 0; i < ethnicitiesList.length; i++) {
    const diseasesToCounts = new Map();
    for (let j = 0; j < diseasesList.length; j++) {
      diseasesToCounts.set(diseasesList[j], 0);
    }
    ethnicitiesToDiseases.set(ethnicitiesList[i], diseasesToCounts);
  };

  for (let i = 0; i < phenopacketsData.length; i++) {
    const phenopacket = phenopacketsData[i];
    const ethnicity = phenopacket.subject.ethnicity;
    const diseases = phenopacket.diseases;
    const diseasesToCounts = ethnicitiesToDiseases.get(ethnicity);
    for (let j = 0; j < diseases.length; j++) {
      const disease = diseases[j];
      const termId = disease.term.id;
      diseasesToCounts.set(termId, diseasesToCounts.get(termId) + 1);
    };
  };

  return ethnicitiesToDiseases;
}

export default BarChart;