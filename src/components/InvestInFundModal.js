import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from "react-bootstrap";

function InvestInFundModal(props) {

  const { investInFund } = props;

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    investInFund(0,1,data.noShares);    // side,dai,shares
  };

  return (
    <>
      {!show && <Button onClick={openModal}>Invest In Fund</Button>}
      
      <Modal show={show} onHide={closeModal}>

        <Modal.Header closeButton>
          <Modal.Title>Invest In Fund</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={ handleSubmit(onSubmit) }>

            <Form.Group controlId="investorAddr">
              <Form.Label>Investor Address</Form.Label>
              <Form.Control type="text" name="investorAddr" placeholder="Enter Address" ref={register ({ required: true })}/>
              <div className="text-danger ml-2">{errors.investorAddr && "Address Required"}</div> 
            </Form.Group>

            <Form.Group controlId="investorName">
              <Form.Label>Investor Name</Form.Label>
              <Form.Control type="text" name="investorName" placeholder="Enter Name" ref={register}/>
            </Form.Group>

            <Form.Group controlId="investorCountry">
              <Form.Label>Investor Country</Form.Label>
              <Form.Control type="text" name="investorCountry" placeholder="Enter Country" ref={register}/>
            </Form.Group>

            <Form.Group controlId="noShares">
              <Form.Label>No Shares</Form.Label>
              <Form.Control type="noShares" name="noShares" placeholder="No Shares" ref={register ({ required: true })}/>
              <div className="text-danger ml-2">{errors.noShares && "Number of Shares Required"}</div>
            </Form.Group>

            <Button type='submit' >Submit</Button>

          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default InvestInFundModal;