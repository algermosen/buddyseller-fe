import { useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { productService } from "#src/services/productService.js";

const products = await productService.getAll();
console.log({ products });
function ProductSelector() {
  useEffect(() => {}, []);

  return (
    <Autocomplete
      variant="bordered"
      defaultItems={[]}
      label="Select an product"
    >
      {(item) => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
}

export default ProductSelector;
