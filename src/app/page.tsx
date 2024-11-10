import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-96 gap-12">
			<div className="flex items-center justify-center">
				<p className="text-6xl font-bold text-center">
					A simple{" "}
					<span className="text-6xl font-extrabold bg-gradient-to-bl from-blue-500 to-pink-500 bg-clip-text text-transparent">
						Landing Page
					</span>{" "}
					with Pricing Page using Shadcn UI
				</p>
			</div>
			<Button
				className="bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 h-14"
				size="lg"
			>
				View plans
			</Button>
		</div>
	);
}
