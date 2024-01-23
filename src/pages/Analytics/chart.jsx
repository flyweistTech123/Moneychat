import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import india from '../../Images/Indian.png'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart1 = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'dark2', // "light1", "dark1", "dark2"
    title: {
      text: 'Trip Expenses',
    },
    data: [
      {
        type: 'pie',
        indexLabel: '{label}: {y}%',
        startAngle: -90,
        dataPoints: [
          { y: 20, label: india, image: 'india' },
          { y: 24, label: 'Food & Drinks', image: 'URL_TO_FOOD_DRINKS_IMAGE' },
          { y: 20, label: 'Accommodation', image: 'URL_TO_ACCOMMODATION_IMAGE' },
          { y: 14, label: 'Transportation', image: 'URL_TO_TRANSPORTATION_IMAGE' },
          { y: 12, label: 'Activities', image: 'URL_TO_ACTIVITIES_IMAGE' },
          { y: 10, label: 'Misc', image: 'URL_TO_MISC_IMAGE' },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default PieChart1;
