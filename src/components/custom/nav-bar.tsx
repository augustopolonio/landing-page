"use client";
import { ArrowUpRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToogleTheme } from "./toogle-theme";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
	const contactUrl = "https://linktr.ee/augustopolonio";
	const router = useRouter();
	return (
		<>
			<nav className="pt-2 px-4 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<Compass className="h-10 w-10" />
					<div className="text-2xl hidden md:block">ACME</div>
					{/* Navigation */}
					<div className="ml-4">
						<Button variant="ghost" onClick={() => router.push("/")}>
							Home
						</Button>
						<Button variant="ghost" onClick={() => router.push("/pricing")}>
							Pricing
						</Button>
						<Link href={contactUrl} rel="noopener noreferrer" target="_blank">
							<Button variant="ghost">
								Contact
								<ArrowUpRight className="h-5 w-5" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="default" onClick={() => router.push("/signup")}>
						Sign Up
					</Button>
					<ToogleTheme />
				</div>
			</nav>
			<Separator className="my-2" />
		</>
	);
}
