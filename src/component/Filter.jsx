import { useState } from "react";

function Filter() {
  const [items, setItems] = useState([
    "Date of registration",
    "Vendor score",
    "Rating",
    "Status",
    "Type of business",
    "Location",
    "Assign to",
  ]);

  const [isVal, setIsVal] = useState(false);

  function handleDropdown() {
    console.log("hii");
    if (isVal === false) {
      setIsVal(true);
    } else {
      setIsVal(false);
    }
  }

  return (
    <div>
      <button className="btn" onClick={handleDropdown}>
        Filters 🔽
      </button>
      <div className="dropDown">
        <div className="refine">
          <div className="ref">Refine by</div>
          <div className="clearBtn" onClick={() => setIsVal(false)}>
            Clear
          </div>
        </div>
        {isVal &&
          items.map((item, i) => {
            return (
              <li className="list" key={i}>
                {item}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default Filter;
