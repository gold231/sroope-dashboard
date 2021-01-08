import React from 'react';
import {Bar} from 'react-chartjs-2';

 const InvestorsBar = ({investors}) => { 
  
  let labels = [];
  let dataset = [];
  for (let i=0;i<investors.length;i++) {
    labels.push(investors[i].investorName); 
    dataset.push(investors[i].shareBalance);
  }

  let state = {
    labels: labels,
    datasets: [
      {
        label: 'shareBalance',
        backgroundColor: ['orange','blue','red','purple','green'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: ['orange','blue','red','purple','green'],
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: dataset
      }
    ]
  };
  
  // console.log(state)

   return (
      <div>Investors Bar
         <h1>Bar Chart</h1>
         <Bar
          data={state}
          options={{
            // maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 100
                }
              }]
            }
          }}
        />
      </div>
   );
 }

 export default InvestorsBar;