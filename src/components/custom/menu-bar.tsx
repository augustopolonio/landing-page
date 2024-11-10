"use client";

import { useTheme } from "next-themes";
import { Compass, Moon, SquareTerminal, Sun } from "lucide-react";
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

export function MenuBar() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Menubar className="flex justify-between h-14">
			<div className="flex">
				<div className="flex items-center gap-2 ml-5 mr-10">
					<Compass className="h-10 w-10" />
					<div className="text-2xl">ACME</div>
				</div>
				<MenubarMenu>
					<MenubarTrigger>Docs</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							Undo <MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Find</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Search the web</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Find...</MenubarItem>
								<MenubarItem>Find Next</MenubarItem>
								<MenubarItem>Find Previous</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
						<MenubarCheckboxItem checked>
							Always Show Full URLs
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarItem inset>
							Reload <MenubarShortcut>⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled inset>
							Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Toggle Fullscreen</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Hide Sidebar</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Profiles</MenubarTrigger>
					<MenubarContent>
						<MenubarRadioGroup value="benoit">
							<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
							<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
							<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
						</MenubarRadioGroup>
						<MenubarSeparator />
						<MenubarItem inset>Edit...</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Add Profile...</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</div>
			<Button variant="ghost" size="icon" onClick={toggleTheme}>
				{theme === "dark" ? (
					<Sun className="h-[1.2rem] w-[1.2rem]" />
				) : (
					<Moon className="h-[1.2rem] w-[1.2rem]" />
				)}
				<span className="sr-only">Toggle theme</span>
			</Button>
		</Menubar>
	);
}
