import React from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const generateItems = (n: number) => {
  const items = [
    "All Batch Students",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
    "Batch-",
  ];
  const dataset = [];

  for (let i = 0; i < n; i++) {
    const item = items[i % items.length];

    dataset.push({
      label: `${item}${i}`,
      value: `${item.toLowerCase()}${i}`,
      description: "Sample description",
    });
  }

  return dataset;
};

const Filter = () => {
  const items = generateItems(10);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        // isVirtualized
        className="max-w-xs"
        defaultItems={items}
        label=""
        placeholder="Search..."
        inputProps={{
          className: "bg-gray-800 text-black placeholder-gray-400 border-none",
        }}
        listboxProps={{
          className: "bg-gray-900 text-white border border-gray-700 rounded-md",
          style: {
            maxHeight: "250px", // Limits height of the dropdown
            overflowY: "auto", // Allows scrolling inside the dropdown only if needed
          },
        }}
      >
        {(item) => (
          <AutocompleteItem
            key={item.value}
            className="hover:bg-gray-700 text-gray-400 px-4 py-2 cursor-pointer"
          >
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default Filter;
