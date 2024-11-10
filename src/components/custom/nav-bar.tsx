"use client";
import { ArrowUpRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToogleTheme } from "./toogle-theme";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {
	return (
		<>
			<nav className="pt-2 px-4 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<Compass className="h-10 w-10" />
					<div className="text-2xl">ACME</div>
					{/* Navigation */}
					<div className="ml-4">
						<Button variant="ghost">Home</Button>
						<Button variant="ghost">Pricing</Button>
						<Button
							variant="ghost"
							onClick={() => {
								window.open("https://linktr.ee/augustopolonio", "_blank");
							}}
						>
							Contact
							<ArrowUpRight className="h-5 w-5" />
						</Button>
					</div>
				</div>
				<ToogleTheme />
			</nav>
			<Separator className="my-2" />
		</>
	);
}
