import { useState } from "react";
import "./App.css";
import data from "./data.js";

const categories = ["All", "Breakfast", "Lunch", "Shakes"];
const images = [
  require("./item-1.jpeg"),
  require("./item-2.jpeg"),
  require("./item-3.jpeg"),
  require("./item-4.jpeg"),
  require("./item-5.jpeg"),
  require("./item-6.jpeg"),
  require("./item-7.jpeg"),
  require("./item-8.jpeg"),
  require("./item-9.jpeg"),
];

function App() {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <div className="App">
      <div className="title-container">Our Menu</div>
      <div className="underline"></div>
      <div className="tab-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="tab-item"
              onClick={() => {
                if (index === 0) {
                  setMenuItems(data);
                } else {
                  const newMenuItems = data.filter(
                    (menuItem) => menuItem.category === categories[index]
                  );
                  setMenuItems(newMenuItems);
                }
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="main-container">
        {menuItems.map((menuItem) => {
          return (
            <div className="menu-item" key={menuItem.id}>
              <div className="menu-item-pic-container">
                <img
                  src={images[menuItem.id]}
                  alt={menuItem.name}
                  className="menu-item-pic"
                ></img>
              </div>
              <div className="menu-item-text">
                <div className="menu-item-header">
                  <p className="menu-item-name">{menuItem.name}</p>
                  <p className="menu-item-price">{menuItem.price}</p>
                </div>
                <div className="menu-item-info">{menuItem.info}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
