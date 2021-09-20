import React, { Fragment } from "react";
import classes from './Footer.module.css';
const Footer = () => {
	return (
		<Fragment>
			<div className = {classes.footer}>
				<h5 className = {classes.h5}>Contact : skiyasports@gmail.com</h5>
			</div>
		</Fragment>
	);
};
export default Footer;
