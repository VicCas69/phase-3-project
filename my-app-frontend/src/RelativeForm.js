import React, {useState} from "react";
//import RelativeList from "./RelativeList";

function RelativeForm({ handleAddNewRelative}) {
  const [relativeData, setRelativeData] = useState({
    name: "",
    relationship: ""
  });

  function handleChange(event) {
    setRelativeData({
      ...relativeData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNewRelative({
      name: relativeData.name,
      relationship: relativeData.relationship
    })
    setRelativeData("")    
  }

  return (
    <p align="center"> <h1 className="green">Add a new relative</h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input      
        type="text"
        name="name"
        value={relativeData.name}
        onChange={handleChange}
      />
      <label>Relationship</label>
      <input      
        type="text"
        name="relationship"
        value={relativeData.relationship}
        onChange={handleChange}
      />      
      <button type="submit">Add</button>
    </form>
    </p>
  );
}

export default RelativeForm;
