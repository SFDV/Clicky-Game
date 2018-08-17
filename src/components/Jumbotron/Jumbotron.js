//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>It's a Super Saiyan Bargain Sale!</h1>
		<h2>Click on any Super Saiyan to earn a point, but don't click on the same Saiyan twice. Click all 12 and you win!</h2>
	</header>
);
export default Jumbotron;