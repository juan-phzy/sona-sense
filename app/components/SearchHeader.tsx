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
						flex flex-row h-fit p-5 justify-between"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Header;
