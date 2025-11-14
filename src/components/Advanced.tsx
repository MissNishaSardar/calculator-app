"use client";

import { Divide, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const Advanced = () => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [total, setTotal] = useState("");
	const [operator, setOperator] = useState("");

	const handleOp = () => {
		if (input1 !== "" && input2 !== "") {
			const inp1 = parseInt(input1);
			const inp2 = parseInt(input2);

			switch (operator) {
				case "+":
					setTotal((inp1 + inp2).toString());
					break;
				case "-":
					setTotal((inp1 - inp2).toString());
					break;
				case "X":
					setTotal((inp1 * inp2).toString());
					break;
				case "/":
					setTotal((inp1 / inp2).toString());
					break;

				default:
					break;
			}
		}
		setInput1("");
		setInput2("");
		setOperator("");
	};

	const handleReset = () => {
		setInput1("");
		setInput2("");
		setOperator("");
		setTotal("");
	};

	return (
		<section className="grid grid-cols-3 gap-4">
			<Input
				placeholder="Input-1"
				type="number"
				onChange={(e) => setInput1(e.target.value)}
				value={input1}
			/>
			<Select
				onValueChange={(opValue) => setOperator(opValue)}
				value={operator}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="+">
						<Plus />
					</SelectItem>
					<SelectItem value="-">
						<Minus />
					</SelectItem>
					<SelectItem value="X">
						<X />
					</SelectItem>
					<SelectItem value="/">
						<Divide />
					</SelectItem>
				</SelectContent>
			</Select>

			<Input
				placeholder="Input-2"
				value={input2}
				onChange={(e) => setInput2(e.target.value)}
				type="number"
			/>

			<Input
				placeholder="Total"
				disabled
				type="number"
				className="col-span-2 w-auto"
				value={total}
			/>
			<Button
				type="button"
				onClick={handleOp}
				className="cursor-pointer"
				disabled={input1 === "" || input2 === "" || operator === ""}>
				Calculate
			</Button>

			<Button
				onClick={handleReset}
				className="col-span-3"
				type="button"
				variant={"destructive"}
				disabled={total === ""}>
				Reset
			</Button>
		</section>
	);
};

export default Advanced;
