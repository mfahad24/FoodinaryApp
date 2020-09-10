import React from "react"; // , { useState }
import "./Categories.css";
import { categories } from "../../../data/categories";

// the reason for this below is because i was getting broken images with
// just mapping the image from the json file like normally
// and i did not find a workaround anywhere

import American from "../../../assets/American.jpg";
import Chinese from "../../../assets/Chinese.jpg";
import Ethiopian from "../../../assets/Ethiopian.jpg";
import French from "../../../assets/French.jpg";
import Greek from "../../../assets/Greek.jpg";
import Indian from "../../../assets/Indian.jpg";
import Japanese from "../../../assets/Japanese.jpg";
import Korean from "../../../assets/Korean.jpg";
import Mexican from "../../../assets/Mexican.jpeg";
import Italian from "../../../assets/Italian.jpeg";
import MiddleEastern from "../../../assets/MiddleEastern.jpg";
import Thai from "../../../assets/Thai.jpg";

let allImages = [
  American,
  Chinese,
  Ethiopian,
  French,
  Greek,
  Indian,
  Japanese,
  Korean,
  Mexican,
  Italian,
  MiddleEastern,
  Thai,
];

function Categories() {
  //   const [isShown, setIsShown] = useState(false);
  return (
    <div className="categories-container">
      {categories.map((category, key) => {
        return (
          <>
            <img
              //   onMouseEnter={() => setIsShown(true)}
              //   onMouseLeave={() => setIsShown(false)}
              className={`categories-image image-${category.id}`}
              alt={category.alt}
              key={key}
              src={allImages[category.id]}
            />
          </>
        );
      })}
    </div>
  );
}

export default Categories;
