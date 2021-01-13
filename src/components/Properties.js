import React from 'react';
import { Table } from 'react-bootstrap';

 const Properties = ({properties}) => { 

    return (
      <div>
        <div>Property Grid</div>
        <div>
          <h4>Property</h4>
          <Table className="text-center">
            <thead>
              <tr>
                <th className="px-1 py-2"></th>
                <th className="px-1 py-2">Code</th> 
                <th className="px-1 py-2">Name</th> 
                <th className="px-1 py-2">Country</th> 
                <th className="px-1 py-2">Value</th> 
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index}>
                  <td className="px-1 py-2">{property.thumbPhoto}</td>
                  <td className="px-1 py-2">{property.propertyCode}</td>
                  <td className="px-1 py-2">{property.propertyName}</td>
                  <td className="px-1 py-2">{property.propertyCountry}</td>
                  <td className="px-1 py-2">{property.valuation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
 }

 export default Properties;
