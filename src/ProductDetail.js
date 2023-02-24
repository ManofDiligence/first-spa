import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
export default function ProductDetail() {
  let params = useParams();
  return (
    <div>
      #{params.id}info about product
      <Link to="/">Back to the Product List</Link>
    </div>
  );
}
