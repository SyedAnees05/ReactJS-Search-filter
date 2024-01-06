import { useState } from "react";
import "./styles.css";

export default function App() {
  const List = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(List);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(List);
      return;
    }
    const filteredValues = List.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}
