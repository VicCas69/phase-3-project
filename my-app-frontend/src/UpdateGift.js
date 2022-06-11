import React, {useState} from "react";

function UpdateGift( { description, price, color, id, onUpdateGift} ) {

    const [newDescription, setDescription] = useState(description);
    const [newPrice, setPrice] = useState(price);
    const [newColor, setColor] = useState(color);

    function handleEditSubmit(e){
        e.preventDefault();
  
        fetch(`http://localhost:9292/gifts/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                description: newDescription,
                price: newPrice,
                color: newColor
              }),
            })
              .then((r) => r.json())
              .then((updatedGift) => onUpdateGift(updatedGift))
          }
  
    return (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="description"
            value={newDescription}
            onChange={(e) => setDescription(e.target.value)}
            />
          <input
            type="number"
            name="price"
            value={newPrice}
            onChange={(e) => setPrice(e.target.value)}
            />
          <input
            type="text"
            name="color"
            value={newColor}
            onChange={(e) => setColor(e.target.value)}
            />
          <input type="submit" value="Save" />
        </form>
    );
  }
  
  export default UpdateGift;