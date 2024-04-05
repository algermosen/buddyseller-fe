import PropTypes from "prop-types";

import ProductSelector from "./ProductSelector";

function ProductForm() {
  return (
    <>
      <ProductSelector />
    </>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ProductForm;
