export default function ButtonGroup(props) {
  return (
    <>
      <div className="budget">
        <button
          className={`budget-input ${props.isActive === 1 ? "active" : ""}`}
          onClick={() => {
            props.setIsActive((props.isActive = 1));
            props.setBudgetChoice((props.BudgetChoice = "$2k"));
          }}
        >
          $2k
        </button>
        <button
          className={`budget-input ${props.isActive === 2 ? "active" : ""}`}
          onClick={() => {
            props.setIsActive((props.isActive = 2));
            props.setBudgetChoice((props.BudgetChoice = "$5k"));
          }}
        >
          $5k
        </button>
        <button
          className={`budget-input ${props.isActive === 3 ? "active" : ""}`}
          onClick={() => {
            props.setIsActive((props.isActive = 3));
            props.setBudgetChoice((props.BudgetChoice = "No limit"));
          }}
        >
          No limit
        </button>
      </div>
    </>
  );
}
