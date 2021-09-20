import React from "react";
const Product = ({ name, price, image }) => {
	return (
		<div className='col-md-4'>
			<div className='card'>
				<img className='card-img-top img-fluid' src={image} alt={name} />
				<div className='card-body'>
					<h5 className='card-title col-md-12'>{name}</h5>
					<div className='price'>
						{" "}
						<p className='card-text col-md-12'> Rs.{price}</p>
					</div>
					<div className='button'>
						{" "}
						<a href='#' className='btn btn-success'>
							Add to cart
						</a>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Product;
