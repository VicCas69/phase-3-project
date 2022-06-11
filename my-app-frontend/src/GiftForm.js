import React, {useState} from "react";
//import RelativeList from "./RelativeList";

function GiftForm({ handleAddNewGift, relatives }) {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    color: "",
    recipient: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNewGift({
      description: formData.description,
      price: formData.price,
      color: formData.color,
      recipient: formData.recipient
    })
    setFormData("")
    
  }

  return (
    <p align="center"> <h1 className="green">Add a new gift</h1>
    <form onSubmit={handleSubmit}>
      <label>Description</label>
      <input      
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label>Price</label>
      <input      
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <label>Color</label>
      <input      
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label>Recipient</label>
      <input      
        type="text"
        name="recipient"
        list="relatives"
        value={formData.recipient}
        onChange={handleChange}
      />

      <datalist id="relatives">
        {relatives.map(relative => <option key={relative.id}>{relative.name}</option>)}
      </datalist>
      
      <button type="submit">Add</button>
    </form>
    </p>
  );
}

export default GiftForm;
