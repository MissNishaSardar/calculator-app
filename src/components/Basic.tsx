"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const Basic = () => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [total, setTotal] = useState("");

	const addFunc = () => {
		if (input1 !== "" && input2 !== "") {
			const result = parseInt(input1) + parseInt(input2);
			setTotal(result.toString());
		}
		setInput1("");
		setInput2("");
	};

	const subFunc = () => {
		if (input1 !== "" && input2 !== "") {
			const result = parseInt(input1) - parseInt(input2);
			setTotal(result.toString());
		}
		setInput1("");
		setInput2("");
	};

	const multiFunc = () => {
		if (input1 !== "" && input2 !== "") {
			const result = parseInt(input1) * parseInt(input2);
			setTotal(result.toString());
		}
		setInput1("");
		setInput2("");
	};

	const devideFunc = () => {
		if (input1 !== "" && input2 !== "") {
			const result = parseInt(input1) / parseInt(input2);
			setTotal(result.toString());
		}
		setInput1("");
		setInput2("");
	};

	const clearFunc = () => {
		setTotal("");
	};

	return (
		<section className="grid grid-cols-4 gap-4">
			<Input
				className="col-span-2"
				placeholder="Input-1"
				value={input1}
				type="number"
				onChange={(e) => setInput1(e.target.value)}
			/>
			<Input
				className="col-span-2"
				placeholder="Input-2"
				value={input2}
				type="number"
				onChange={(e) => setInput2(e.target.value)}
			/>

			<Input
				className="col-span-4"
				placeholder="Total"
				disabled
				value={total}
				type="number"
			/>

			<Button
				onClick={addFunc}
				type="button"
				className="cursor-pointer"
				disabled={input1 === "" || input2 === ""}>
				Add
			</Button>
			<Button
				onClick={subFunc}
				type="button"
				className="cursor-pointer"
				disabled={input1 === "" || input2 === ""}>
				Subtract
			</Button>
			<Button
				onClick={multiFunc}
				type="button"
				className="cursor-pointer"
				disabled={input1 === "" || input2 === ""}>
				Multiply
			</Button>
			<Button
				onClick={devideFunc}
				type="button"
				className="cursor-pointer"
				disabled={input1 === "" || input2 === ""}>
				Devide
			</Button>

			<Button
				className="col-span-4"
				type="button"
				onClick={clearFunc}
				variant={"destructive"}
				disabled={total === ""}>
				Reset
			</Button>
		</section>
	);
};

export default Basic;
