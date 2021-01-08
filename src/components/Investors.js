import React from 'react';

 const Investors = ({investors}) => { 

    return (
     <div>
       <div>Investors Grid</div>
       <div>
         <table>
           <thead>
             <tr>
               <th colSpan='3'>Investor</th>
             </tr>
             <tr>
               <th>id</th> 
               <th>Investor</th> 
               <th>Name</th> 
               <th>Country</th> 
               <th>Shares</th> 
               <th>%</th> 
             </tr>
           </thead>
           <tbody>
             {investors.map((investor, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{investor.investorAddr}</td>
                  <td>{investor.investorName}</td>
                  <td>{investor.investorCountry}</td>
                  <td>{investor.shareBalance}</td>
                  <td>{investor.sharePercent}</td>
                </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
    );
 }

 export default Investors;