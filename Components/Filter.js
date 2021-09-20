import React, { Fragment } from "react";
const Filter = ({ filterHandler, sortHandler, getDataHandler }) => {
	return (
		<Fragment>
			<div className='col-md-3'>
				<div id='filter mb-3'>
					<div className='card-filter'>
						<div className='card-body-filter'>
							<h3 className='filter-input mb-3'>Filter</h3>
							<div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range1'
										onClick={() => filterHandler(400, 500)}
									></input>{" "}
									<label className='lable'>Rs.400-500</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range2'
										onClick={() => filterHandler(500, 550)}
									></input>{" "}
									<label className='lable'>Rs.500-550</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range3'
										onClick={() => filterHandler(550, 600)}
									></input>{" "}
									<label className='lable'>Rs.550-600</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range4'
										onClick={() => filterHandler(600, 650)}
									></input>{" "}
									<label className='lable'>Rs.600-650</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range5'
										onClick={() => filterHandler(650, 700)}
									></input>{" "}
									<label className='lable'>Rs.650-700</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='range5'
										onClick={() => filterHandler(700, 900)}
									></input>{" "}
									<label className='lable'>Rs.700-900</label>
								</div>
								<div>
									<input
										className='filter-input-type'
										type='radio'
										name='filter'
										value='high to low'
										onClick={() => getDataHandler()}
									></input>{" "}
									<label className='lable'>None</label>
								</div>
								<hr />
							</div>
							<h3 className='filter-input mb-3'>Sort By</h3>
							<div>
								<input
									className='filter-input-type'
									type='radio'
									name='sort'
									value='low to high'
									onClick={() => sortHandler(true)}
								></input>{" "}
								<label className='lable'>Price Low to High</label>
							</div>
							<div>
								<input
									className='filter-input-type'
									type='radio'
									name='sort'
									value='high to low'
									onClick={() => sortHandler(false)}
								></input>{" "}
								<label className='lable'>Price High to Low</label>
							</div>
							<div>
								<input
									className='filter-input-type'
									type='radio'
									name='sort'
									value='high to low'
									onClick={() => getDataHandler()}
								></input>{" "}
								<label className='lable'>None</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Filter;
