import Advanced from "@/components/Advanced";
import { Card, CardContent, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Calculator App",
	description: "Calculator App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card>
					<CardTitle className="text-center text-2xl">
						Advanced Calculator
					</CardTitle>
					<CardContent>
						<Advanced />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
