import React from 'react';

 const Properties = ({properties}) => { 

    return (
      <div>
      <div>Property Grid</div>
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan='3'>Property</th>
            </tr>
            <tr>
              <th></th>
              <th>Code</th> 
              <th>Name</th> 
              <th>Country</th> 
              <th>Value</th> 
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
               <tr key={index}>
                 <td>{property.thumbPhoto}</td>
                 <td>{property.propertyCode}</td>
                 <td>{property.propertyName}</td>
                 <td>{property.propertyCountry}</td>
                 <td>{property.valuation}</td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
 }

 export default Properties;

// <h2>It is {new Date().toLocaleTimeString()}.</h2>
