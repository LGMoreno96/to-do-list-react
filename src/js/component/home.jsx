import React, { useState } from "react";

//create your first component
const Home = () => {
	const [list, setList] = useState([
		"Make the bead",
		"Wash my hands",
		"Eat",
		"Walk the dog",
	]);
	const [element, setElement] = useState("");

	return (
		<div className="container py-4">
			<div className="row text-center">
				<h1>{"To-Dos"}</h1>
			</div>
			<input
				className="form-control px-4"
				type={"text"}
				placeholder="What needs to be done?"
				value={element}
				onChange={(i) => {
					setElement(i.target.value);
				}}
				onKeyDown={(i) => {
					if (i.key === "Enter") {
						setList((List) => [...List, element]);
						setElement("");
					}
				}}></input>
			<ul>
				{list.map((element, index) => {
					return (
						<li key={index}>
							{element}
							<span
								className="close"
								onClick={() => {
									setList(
										list.filter((task, i) => {
											if (index == i) {
												return false;
											} else {
												return true;
											}
										})
									);
								}}>
								x
							</span>
						</li>
					);
				})}
			</ul>
			<div className="counter">
				{list.length == 0
					? "No tasks, add a task"
					: list.length + " item(s) left"}
			</div>
			<div className="bottom-page-1"></div>
			<div className="bottom-page-2"></div>
		</div>
	);
};
export default Home;
