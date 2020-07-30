import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <div>
        find countries: <input value={filter} onChange={onChange} />
      </div>
    </div>
  );
};

export default Filter;
