import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/custom/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Landing Page",
	description:
		"A simple landing page with pricing page example using Shadcn UI",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
