import React from 'react'; 

function Fund({funds}) {

  return (
      <div>
        <div>
            Fund Tiles
        </div>
        <div> {funds.map((fund, index) => (
                <tr key={index}>
                  <div>[ Fund Name: {fund.fundName} ]  [ Total Shares: {fund.fundTotalShares} ]</div>
                  <div>[ Share Balance: {fund.fundShareBalance} ] [ Share Price: {fund.fundSharePrice} ]</div>
                  <div>[ Share Value: {fund.fundShareValue} ]  [ DAI Balance: {fund.fundDaiBalance} ]</div>
                </tr>
             ))}
        </div>
      </div>
  );
}

export default Fund;