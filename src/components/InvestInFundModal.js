import React from "react";
import { useForm } from 'react-hook-form';

function InvestInFundModal(props) {

  const { show, closeModal, investInFund } = props;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    investInFund(0,1,data.noShares);    // side,dai,shares
  };

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>

        <h1>Invest In Fund</h1>

        <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Investor Address</label>
              <input type="text" name="investorAddr" ref={register ({ required: true })} />
              {errors.investorAddr && "Address Required"}
            </div>
            <div className="form-control">
              <label>Investor Name</label>
              <input type="text" name="investorName" ref={register} />
            </div>
            <div className="form-control">
              <label>Investor Country</label>
              <input type="text" name="investorCountry" ref={register}/>
            </div>
            <div className="form-control">
              <label>No Shares</label>
              <input type="noShares" name="noShares" ref={register ({ required: true })}/>
              {errors.noShares && "Number of Shares Required"}
            </div>
            <input type='submit' /> 
          </form>
        </div>
    </div>
    </>
  );
}

export default InvestInFundModal;