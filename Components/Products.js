import React from "react";
import Product from "./Product";

const Products = ({ list }) => {
	let productItems = [];
	if (list.length !== 0) {
		productItems = list.map((product) => (
			<Product
				key={product.id}
				name={product.name}
				price={product.price}
				image={product.image}
			/>
		));
	} else {
		return <div></div>;
	}
	return (
		<div className='col-md-9'>
			<div className='row' id='product'>
				{productItems}
			</div>
		</div>
	);
};

export default Products;
