import React, {useState} from "react";
import UpdateGift from "./UpdateGift";

function Gift( { gift, onUpdateGift, handleDelete} ) {

    const { description, price, color, id } = gift;
    const [isEditing, setIsEditing] = useState(false)

    function handleUpdateGift(updatedGift){
        setIsEditing(false);
        onUpdateGift(updatedGift)

    }  
  
    return (
        <li>
          {isEditing ? (
            <UpdateGift
            id={id}
            description={description}
            price={price}
            color={color}
            onUpdateGift={handleUpdateGift}
            />
            ) : (
                <li>
            <table width="600px" margin-left="auto" margin-right="auto">
                <tr>
                    <th>Description:</th>
                    <th>Price:</th>
                    <th>Color:</th>
                    <th>Recipient:</th>                  
                    </tr> 
                <tr>
                    <td>{description}</td>
                    <td>${price}</td>
                    <td>{color}</td>
                    <td>{gift.recipient || gift.relative_name} </td>
                    </tr></table>
               <button className="button button1" onClick={() => setIsEditing((isEditing) => !isEditing)}>       ✏️</button>
             <button className="button button2" onClick={()=>handleDelete(id)}>✖</button>
             
             </li>
            )}        
                         
      </li>       
    );
  }
  
  export default Gift;