import React, { useRef } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Hungry? We've Got You Covered!</h1>
      <p className='explore-menu-text'>Browse through our mouth-watering menu, crafted with fresh ingredients to bring you the perfect meal.</p>

      {/* Left Arrow */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>

      <div className="explore-menu-list" ref={menuRef}>
        {menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="scroll-btn right" onClick={scrollRight}>
        <FaChevronRight />
      </button>

      <hr />
    </div>
  );
};

export default ExploreMenu;
