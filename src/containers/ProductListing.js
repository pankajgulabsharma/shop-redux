import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setproducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log("products", products);
  const dispatch = useDispatch();

  //creating function for fetching API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error:", err);
      });
    dispatch(setproducts(response.data));
  };

  // calling that function to get data of API
  useEffect(() => {
    fetchProducts();
    console.log("useEffect");
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
