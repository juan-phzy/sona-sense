/* 
	Imports - juan
*/
//--------------------------------------------------------
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import homeImage from "@/public/images/homeImage.jpg";
import LoginButtons from "@/app/components/LoginButtons";

//-------------------------------------------------------
/*
	This is the main landing page that is rendered when
	the site is loaded. - juan
*/
//------------------------------------------------------------------------------------------------
export default function Page() {
	return (
		<>
			{/*
			------------------------------------------------------------------------------------------------------
			Main container which fills the full viewport. The Navbar and Body go inside stacked as a flex column - juan
			----------------------------------------------------------------------------------------------------*/}
			<main className="Site-Container w-screen h-screen flex flex-col min-w-[1111px]">
				{/* 
				-----------------------------------------------------------------------------------------------
				Container for the Navbar. The Navbar component goes inside. Fills width and fits content height - juan
				----------------------------------------------------------------------------------------------*/}
				<nav className="w-full h-fit">
					<Navbar />
				</nav>
				{/*
				-----------------------------------------------------------------------------------------------------
				Container for the body. The body content goes inside. Content is centered and 50px padding all around - juan
				----------------------------------------------------------------------------------------------------*/}
				<section className="w-full h-full flex flex-row justify-center items-center bg-neutral-700 p-[50px]">
					{/*
					-----------------------------------------------------------------------------------------------------------
					Background container for body content. 
						- Body content includes 2 sections stacked side by side as flex rows.
						- Section 1 of body content will be an image, Section 2 will be text
						- 2rem(32px) gap between s	ections - juan
					-----------------------------------------------------------------------------------------------------------*/}
					<section className="w-full h-full flex flex-row justify-center items-center gap-x-8 bg-neutral-400 p-[75px] ">
						{/*
						-------------------------------------------------------------
						Section 1: Image container. Image component goes inside - juan
						------------------------------------------------------------*/}
						<section className="max-w-[600px] w-4/9 h-full flex justify-center items-center text-white text-xl">
							<Image src={homeImage} alt="Home image" />
						</section>
						{/*
						-------------------------------------------------------------
						Section 2: Text container. Two sub-sections go inside stacked as flex columns:
							Sub-section-1: Welcome text, Sub-section-2: User Account Buttons  - juan
						------------------------------------------------------------*/}
						<section className="max-w-[600px] w-4/9 h-full flex flex-col justify-center gap-y-8 items-center text-white text-5xl bg-neutral">
							<div>A new way to search for the sounds you love</div>
							<div className="w-full flex flex-row gap-x-8 text-xl">
								{/*Subsitute bottom two divs with button components with user account functionality*/}
								<LoginButtons />
							</div>
						</section>
					</section>
				</section>
			</main>
		</>
	);
}
