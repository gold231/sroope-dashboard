import React from 'react';
import {Pie} from 'react-chartjs-2';

 const InvestorsPie = ({investors}) => { 

   let labels = [];
   let dataset = [];
   let rest_data = 0;
   for (let i=0;i<investors.length;i++) {
      labels.push(investors[i].investorName); 
      dataset.push(investors[i].shareBalance);
      rest_data += investors[i].shareBalance;
   }
   rest_data = 300 - rest_data;

   labels.push('rest Investors');
   dataset.push(rest_data);
   
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

   return (
      <div>Investors Pie
         <h4>Pie Chart</h4>
         <Pie
            data={state}
         />
      </div>
   );
 }

 export default InvestorsPie;