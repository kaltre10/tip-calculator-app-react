const ContainerResult = ({ result, reset }) => {
  return (
    <div className="container-result">
      <div>
        <div className="amount">
          <div className="row-amount">
            <div className="sub-title">Tip Amount</div>
            <div className="tag">/ person</div>
          </div>
          <div className="result-amount style-number">{result.amount}</div>
        </div>
        <div className="total">
          <div className="row-total">
            <div className="sub-title">Total</div>
            <div className="tag">/ person</div>
          </div>
          <div className="result-total style-number">{result.total}</div>
        </div>
      </div>
      <div className="reset">
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
};

export default ContainerResult;
