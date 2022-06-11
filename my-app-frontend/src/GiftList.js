import React from "react";
//import UpdateGift from "./UpdateGift";
//import UpdateGift from './UpdatedGift.js'
import Gift from './Gift';

function GiftList( {gifts, handleGiftDelete, onUpdateGift} ) {

  //const { description, price, color } = gifts;
  //const [isEditing, setIsEditing] = useState(false)
  
    return (
        <div>
          <ul>
           {gifts.map((gift) => (
            //<li >
              <Gift
              key={gift.id}
              gift = {gift}
              //relative={gift.relative_name}
              handleDelete={handleGiftDelete}
              onUpdateGift={onUpdateGift}
              />             
          //</li>
        ))}
        </ul>
      </div>
    );
  }
  
  export default GiftList;