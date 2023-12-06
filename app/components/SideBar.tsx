"use client";

import useLibrary from "@/hooks/useLibrary";
import Library from "@/app/components/Library";

interface SidebarProps {
	children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
	const { isOpen } = useLibrary();
	return (
		<>
			<div className="flex flex-row w-full h-full">
				{isOpen ? (
					<div className="flex h-full">
						<div
							className="
								flex
								flex-col
								gap-y-2
								bg-neutral-800
								h-full
								w-[350px]
								min-w-[250px]
								p-4
								text-white"
						>
							<Library />
						</div>
					</div>
				) : null}

				<main className="w-full h-full">{children}</main>
			</div>
		</>
	);
};

export default SideBar;
