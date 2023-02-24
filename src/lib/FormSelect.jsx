/**
 * Sort & show options value for selectbox
 */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
  font-size: 16px;
  height: 40px;
  border: none;
  outline: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0 10px;
  width: 50%;

  &:focus {
    border: none;
    outline: 2px solid #4e6701;
  }
`;

function FormSelect({ id, name, value, onChange, data }) {
  const sortedValues =
    typeof data[0] === "string"
      ? data.sort()
      : data.sort((a, b) => {
          if (Object.values(a)[0] < Object.values(b)[0]) return -1;
          if (Object.values(a)[0] > Object.values(b)[0]) return 1;
          return 0;
        });

  function getOption(optionData) {
    return typeof optionData === "string" ? (
      <option key={optionData} value={optionData}>
        {optionData}
      </option>
    ) : (
      <option
        key={Object.values(optionData)[0]}
        value={Object.values(optionData)[1]}
      >
        {Object.values(optionData)[0]}
      </option>
    );
  }

  return (
    <StyledSelect id={id} name={name} value={value} onChange={onChange}>
      <option value="">&nbsp;</option>
      {sortedValues.map((optionData) => getOption(optionData))}
    </StyledSelect>
  );
}

FormSelect.defaultProps = {
  id: "",
  name: "",
  value: "",
  onChange: () => {},
  data: [],
};

FormSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.oneOfType([
    // Accepte à la fois un tableau de string et un tableau d'objets
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
};

export default FormSelect;
