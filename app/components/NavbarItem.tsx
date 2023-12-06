import Link from "next/link";
import { Button } from "./ui/button";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import useLibrary from "@/hooks/useLibrary";

interface NavbarItemProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href?: string;
	isToggle?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
	icon: Icon,
	label,
	active,
	href,
	isToggle,
}) => {
	const { isOpen, openLib, closeLib } = useLibrary();

	const toggleSidebar = () => {
		if (isOpen) {
			closeLib();
		} else {
			openLib();
		}
	};

	return (
		<>
			{isToggle ? (
				<Button
					variant="ghost"
					onClick={toggleSidebar}
					className={twMerge(
						`text-neutral-300 cursor-pointer`,
						isOpen && "text-white"
					)}
				>
					<Icon className="w-[1.4rem] h-[1.4rem]" />
				</Button>
			) : (
				<Button
					variant="ghost"
					className={twMerge(
						`text-neutral-300 cursor-pointer`,
						active && "text-white"
					)}
				>
					<Link href={href || "/"}>
						<Icon className="w-[1.4rem] h-[1.4rem]" />
					</Link>
				</Button>
			)}
		</>
	);
};

export default NavbarItem;
