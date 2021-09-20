import classes from "./Header.module.css";
import React, { useState, Fragment } from "react";

const Header = ({ searchHandler }) => {
	const [searchName, setData] = useState("");
	const changeHandler = (event) => {
		setData(event.target.value);
		console.log(searchName);
	};
	const changeNewHandler = () => {
		if (searchName.length !== 0) {
			searchHandler(searchName);
		} else if (searchName.length === 0) {
			return <h1>No items Found!!</h1>;
		}
	};
	return (
		<Fragment>
			<header className={classes.header}>
				<div className='row'>
					<h1 className='col-md-4 head'>Product List</h1>
					<div className='col-md-4'></div>
					<div className='col-md-4 head'>
						<div className='searchbar'>
							<div className='input-group'>
								{" "}
								<input
									type='text'
									className='form-control'
									value={searchName}
									name='sName'
									onChange={changeHandler}
									placeholder='Search here...'
								/>
								<div className='input-group-append'>
									<button className='btn btn-danger' onClick={changeNewHandler}>
										Search
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
