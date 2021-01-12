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
                <th className="px-1 py-2">id</th> 
                <th className="px-1 py-2">Investor</th> 
                <th className="px-1 py-2">Name</th> 
                <th className="px-1 py-2">Country</th> 
                <th className="px-1 py-2">Shares</th> 
                <th className="px-1 py-2">%</th> 
              </tr>
            </thead>
            <tbody>
              {investors.map((investor, index) => (
                  <tr key={index}>
                    <td className="px-1 py-2">{index+1}</td>
                    <td className="px-1 py-2">{investor.investorAddr}</td>
                    <td className="px-1 py-2">{investor.investorName}</td>
                    <td className="px-1 py-2">{investor.investorCountry}</td>
                    <td className="px-1 py-2">{investor.shareBalance}</td>
                    <td className="px-1 py-2">{Math.round(investor.sharePercent * 10000)/100}</td>
                  </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
 }

 export default Investors;