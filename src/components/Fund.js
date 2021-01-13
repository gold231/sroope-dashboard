import React from 'react'; 
import { Row, Col, Card } from "react-bootstrap";

function Fund({funds}) {

  return (
      <div>
        <div>
            Fund Tiles
        </div>
        <div> 
          <h4>Funds</h4>
          {funds.map((fund, index) => (
            <div key={index} className="funds">
              <Row className="overflow-auto">
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">Fund Name:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundName}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">Total Shares:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundTotalShares}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">Share Balance:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundShareBalance}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">Share Price:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundSharePrice}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">Share Value:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundShareValue}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="4">
                  <Card border="primary" style={{ width: '9rem' }} className="float-left mb-2">
                    <Card.Header className="py-2">DAI Balance:</Card.Header>
                    <Card.Body className="py-2">
                      <Card.Text>
                        {fund.fundDaiBalance}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Fund;