import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Header from './components/Header';
import Fund from './components/Fund';
import Investors from './components/Investors';
import InvestorsPie from './components/InvestorsPie';
import InvestorsBar from './components/InvestorsBar';
import Properties from './components/Properties.js';
import InvestInFundModal from './components/InvestInFundModal';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [users, setUsers] = useState('');
  const [funds, setFunds] = useState([]);
  const [investors, setInvestors] = useState([]);
  const [properties, setProperties] = useState([]);

  const getFundBalances = async () => {
    // Solidity: Data to be returned using contract.methods.call() 
    const fundX = [{ 
      fundName: 'Fund 1',
      fundTotalShares: 300,
      fundShareBalance: 30,
      fundSharePrice: 1.25,
      fundShareValue: 300 * 1.25,
      fundDaiBalance: 20 }]; 

    return fundX;
  }

  const getInvestorBalances = async () => {
    // Solidity: Data to be returned using contract.methods.call() 
    const investorsX = [{
      investorAddr: '0xBBDF7d21E98b64Eaa146d17e670a07A6B3d93b5e',
      investorName: 'Investor 1',
      investorCountry: 'GB',
      shareBalance: 20,
      sharePercent: 20/300 },
      {
      investorAddr: '0xc151075CDfdd12558871C545C612E09758BE1e71', 
      investorName: 'Investor 2',
      investorCountry: 'GB',
      shareBalance: 30,
      sharePercent: 30/300 },
      {
      investorAddr: '0x673E063A6925c234C29410DD998846b42528a3F0',
      investorName: 'Investor 3',
      investorCountry: 'FR',
      shareBalance: 30,
      sharePercent: 30/300 }
    ];
    return investorsX;
  }

  const getProperties = async () => {
    // Solidity: Data to be returned using contract.methods.call() 
    const properties = [{
      propertyCode: 'P01',
      propertyName: 'Property 1',
      propertyCountry: 'FR',
      valuation: 30000,
      thumbPhoto: 'Photo' },
      {
      propertyCode: 'P02',
      propertyName: 'Property 2',
      propertyCountry: 'DE',
      valuation: 450000,
      thumbPhoto: 'Photo' },
      {
      propertyCode: 'P03',
      propertyName: 'Property 3',
      propertyCountry: 'FR',
      valuation: 1450000,
      thumbPhoto: 'Photo'
     }];
    return properties;
}

  const investInFund = async (_side, _daiAmount, _shareAmount) => {
    // Called by InvestInFund button
    // Solidity: Data to be sent using contract.methods.send() 
    // Add data to array

    // Return updated dataset to display new investor data in grid, pie and pie windows
    const funds = await getFundBalances();
    const investors = await getInvestorBalances();

  }

  useEffect(() => {

    const init = async () => {
 
      const users = '0x870205F114783A876656af06fa4388514568a0b1';
      const funds = await getFundBalances();
      const investors = await getInvestorBalances();
      const properties = await getProperties();

      setUsers(users);
      setFunds(funds);
      setInvestors(investors);
      setProperties(properties);
      
    };
    init();
  },[])

  return (
    <div className="home">

      <div className="p-3">
        <Header />
      </div>
      
      <Row className="mx-0 my-3">
        <Col xl="6" lg="12">
          <Investors investors={investors} />
          <InvestInFundModal investInFund={investInFund} />
        </Col>
        <Col xl="3" lg="6">
          <InvestorsPie investors={investors} />
        </Col>
        <Col xl="3" lg="6">
          <InvestorsBar investors={investors} />
        </Col>
      </Row>

      <Row className="mx-0 my-3">
        <Col md="6">
          <Properties properties={properties}/>
        </Col>
        <Col md="6">
          <Fund funds={funds} />
        </Col>
      </Row>

      <div className="box footer"> Footer </div>

    </div>
  );
}

export default App;