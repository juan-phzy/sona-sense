"use client";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	return (
		<>
			<div className="p-6 flex flex-col h-fit w-full bg-gradient-to-b from-neutral-800">
				<div
					className="
						grid
						grid-cols-4
						gap-3
						mt-4"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Header;
