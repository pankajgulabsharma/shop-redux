import React, { useEffect } from "react";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);
  const error = useSelector((state) => state.allProducts.error);

  console.log("products", products);

  const dispatch = useDispatch();
  {
    /*
  //creating function for fetching API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error:", err);
      });
    dispatch(setProducts(response.data));
  };

  // calling that function to get data of API
  useEffect(() => {
    fetchProducts();
    console.log("useEffect");
  }, []);
*/
  }

  useEffect(() => {
    dispatch(setProducts());
    console.log("hi");
  }, []);

  return (
    <div className="ui grid container">
      {loading && <p>Loading...</p>}
      {products.length === 0 && !loading && <p>No products available</p>}
      {error && !loading && <p>{error}</p>}
      {products && <ProductComponent allProducts={products} />}
    </div>
  );
};

export default ProductListing;
