import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const filteredItems = items.filter((item) => {
    const nameMatches = item.name.toLowerCase().includes(searchText.toLowerCase());
    const categoryMatches = selectedCategory === "All" || item.category === selectedCategory;
    return nameMatches && categoryMatches;
  });

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;