import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Filter from "../Components/Filter";
import BreadCrumb from "../Components/BreadCrumb";
import Products from "../Components/Products";
import Head from 'next/head';
const App = () => {
	const [productList, setProductList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		try {
			setProductList([]);
			const response = await axios.get("http://localhost:8000/items");
			setProductList(response.data);
			console.log(response);
			return response.data;
		} catch (err) {
			throw err;
		}
	};

	const filterData = async (start, end) => {
		let filterList = [];
		productList.forEach((i) => {
			if (i.price >= start && i.price <= end) {
				filterList.push(i);
			}
		});
		setProductList(filterList);
	};

	const sortData = async (order) => {
		let sortList = productList;
		if (!order) {
			await sortList.sort((a, b) => {
				if (a.price < b.price) {
					return 1;
				}
				if (a.price > b.price) {
					return -1;
				}
			});
		} else {
			await sortList.sort((a, b) => {
				if (a.price < b.price) {
					return -1;
				}
				if (a.price > b.price) {
					return 1;
				}
			});
		}
		await setProductList([]);
		await setProductList(sortList);
		console.log(productList);
	};

	const searchData = async (data) => {
		let searchList = [];
		productList.forEach((i) => {
			if (i.productName.indexOf(data) !== -1) {
				searchList.push(i);
			}
		});
		setProductList(searchList);
	};
	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				await getData();
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<div className='Appjs'>
			<Head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
    			<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    			<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header searchHandler={searchData} />
			<div className='main-page'>
				<div className='row'>
					<BreadCrumb />
				</div>
				<div className='row'>
					<Filter
						filterHandler={filterData}
						sortHandler={sortData}
						getDataHandler={getData}
					/>
					{!isLoading ? <Products list={productList} /> : " "}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
