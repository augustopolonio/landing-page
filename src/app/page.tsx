"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
	const gradientStyle =
		"font-extrabold bg-gradient-to-bl from-blue-500 to-pink-500 bg-clip-text text-transparent";
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center h-96 gap-5 px-4">
			<h1 className="text-3xl md:text-5xl font-bold text-center px-6">
				A simple <span className={gradientStyle}>Landing Page</span>
				<br />
				with using Shadcn UI.
			</h1>
			<h2 className="text-md md:text-xl text-center">
				A template for a landing page including login, signup, pricing and
				purchase pages.
			</h2>
			<Button
				variant="gradient"
				size="rounded"
				onClick={() => {
					router.push("/pricing");
				}}
			>
				View plans
			</Button>
		</div>
	);
}
