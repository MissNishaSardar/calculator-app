import Basic from "@/components/Basic";
import { Card, CardContent, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Calculator App",
	description: "Basic page of Calculator App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card>
				<CardTitle className="text-center text-2xl">Basic Calculator</CardTitle>
				<CardContent>
					<Basic />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
