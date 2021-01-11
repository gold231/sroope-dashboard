import React from 'react';
import { Table } from "react-bootstrap";

 const Investors = ({investors}) => { 

    return (
      <div className="investor">
        <div>Investors Grid</div>
        <div>
          <h4>Investor</h4>
          <Table className="text-center">
            <thead>
              <tr>
                <th className="p-1">id</th> 
                <th className="p-1">Investor</th> 
                <th className="p-1">Name</th> 
                <th className="p-1">Country</th> 
                <th className="p-1">Shares</th> 
                <th className="p-1">%</th> 
              </tr>
            </thead>
            <tbody>
              {investors.map((investor, index) => (
                  <tr key={index}>
                    <td className="p-1">{index+1}</td>
                    <td className="p-1">{investor.investorAddr}</td>
                    <td className="p-1">{investor.investorName}</td>
                    <td className="p-1">{investor.investorCountry}</td>
                    <td className="p-1">{investor.shareBalance}</td>
                    <td className="p-1">{Math.round(investor.sharePercent * 10000)/100}</td>
                  </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
 }

 export default Investors;