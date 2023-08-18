import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        id={props.input.id}
        ref={ref}
        {...props.input}
        className="texchangeHandlert-lg py-0 px-3 w-12 h-7"
      />
    </div>
  );
});

export default Input;
