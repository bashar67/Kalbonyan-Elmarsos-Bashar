import { useContext, useRef, useState } from "react";
import Input from "../../UI/Input";
import CartContext from "../../store/Cart-Context";

const CarItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNum = +enterdAmount;

    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNum < 1 ||
      enterdAmountNum > 1000
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterdAmountNum);
  };

  return (
    <form
      className="flex flex-col-reverse gap-2 text-right"
      onSubmit={submitHandler}
    >
      <button className="bg-main-color  py-0 px-2 text-yellow-50 text-lg">
        Add
      </button>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "1000",
          step: "1",
          defultvalue: "1",
        }}
      />
      {!amountIsValid && <p>Pleas enter a valid amount (1-1000)</p>}
    </form>
  );
};

export default CarItemForm;
