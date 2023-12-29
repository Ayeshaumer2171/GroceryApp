import React from "react";
import { catgories } from "../Data/Categories";
import './CartButtons.css'; 

export default function CatButtons({ onCatSelection, selectedCatId }) {
  return (
    <>
      <div className="button-container">
        <button 
          type="button" 
          className={`m-1 btn ${selectedCatId === null ? 'custom-info' : 'custom-secondary'}`}
          onClick={() => onCatSelection(null)}
        >
          All ITEMS
        </button>

        {catgories.map((cat) => (
          <button 
            type="button" 
            className={
              `m-1 btn 
              ${cat.id === selectedCatId ? 'custom-info' : 'custom-secondary'}`
            }
            key={cat.id} 
            onClick={() => onCatSelection(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </>
  );
}
