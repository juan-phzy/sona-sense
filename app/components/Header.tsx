"use client";
import { useUser } from "@/hooks/useUser";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const { userDetails } = useUser();
	let nameDetails: string;
	if (userDetails) {
		nameDetails = userDetails.first_name;
	} else {
		nameDetails = "No User";
	}
	const name = nameDetails.charAt(0).toUpperCase() + nameDetails.slice(1);

	return (
		<>
			<div className="p-6 flex flex-col h-fit w-full bg-gradient-to-b from-neutral-800">
				<p className="w-full h-fit text-4xl font-semibold text-white">
					Welcome back {name}
				</p>

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
