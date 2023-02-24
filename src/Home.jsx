import React, { useState } from "react";
import FormSelect from "./lib/FormSelect";

function Home() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  return (
    <>
      <FormSelect
        id="department"
        name="department"
        data={departments}
        onChange={handleSelectChange}
      />
      <p>Option sélectionnée : {selectedValue}</p>
    </>
  );
}

export default Home;
