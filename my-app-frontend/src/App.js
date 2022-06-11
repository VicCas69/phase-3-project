//import logo from './logo.svg';
import React, {useEffect, useState}from 'react';
import './App.css';
import GiftList from './GiftList';
import RelativeList from './RelativeList';
import GiftForm from './GiftForm';
import RelativeForm from './RelativeForm';

function App() {

  const [gifts, setGifts] = useState([]);
  const [relatives, setRelatives] = useState([]);

  useEffect( () => {
    fetch("http://localhost:9292/gifts")
    .then((r) => r.json())
    .then((data) => setGifts(data))

    fetch("http://localhost:9292/relatives")
    .then((r) => r.json())
    .then((data) => setRelatives(data))}, [gifts, relatives]);

    function handleAddNewGift(newGift){
      const body = JSON.stringify(newGift)
    
      fetch("http://localhost:9292/gifts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body
    })
      .then((r) => r.json())
      .then((newGift) => {
        //console.log(newGift)
        setGifts(gifts.concat(newGift))
      })   
    }
    function handleAddNewRelative(newRelative){
      const body = JSON.stringify(newRelative)
    
      fetch("http://localhost:9292/relatives", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body
    })
      .then((r) => r.json())
      .then((newRelative) => {
        //console.log(newGift)
        setRelatives(relatives.concat(newRelative))
      })   
    }

    function handleUpdateGift(updatedGiftObj) {
      const updatedGift = gifts.map((gift) => {
        if (gift.id === updatedGiftObj.id) {
          return updatedGiftObj;
        } else {
          return gift;
        }
      });
      setGifts(updatedGift);
      //console.log(updatedGift);
    }

    function handleGiftDelete(id){
      fetch(`http://localhost:9292/gifts/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedGift => {
      setGifts(gifts.filter(gift => gift.id !== deletedGift.id))
    })
  }
  
    function handleRelativeDelete(id){
      fetch(`http://localhost:9292/relatives/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedRelative => {
      setRelatives(relatives.filter(relative => relative.id !== deletedRelative.id))
    })}
         

  return (
      <main className='App-header'>
        <h1>🎄Christmas Shopping List 🎄</h1>
        <GiftList gifts={gifts} handleGiftDelete={handleGiftDelete} onUpdateGift={handleUpdateGift}/> 
        <GiftForm handleAddNewGift={handleAddNewGift} relatives={relatives}/>
        <RelativeList relatives={relatives} handleRelativeDelete={handleRelativeDelete}/>
        <RelativeForm handleAddNewRelative={handleAddNewRelative}/>
      </main>
  );
}

export default App;
