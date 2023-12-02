/* 
	Imports - juan
*/
//--------------------------------------------------------
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import homeImage from "@/public/images/homeImage.jpg";
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
			<main className="Site-Container w-screen h-screen flex flex-col">
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
				<section className="Main-Content w-full h-full flex flex-row justify-center items-center bg-neutral-700 p-[50px]">
					{/*
					-----------------------------------------------------------------------------------------------------------
					Background container for body content. Body content includes two sections stacked side by side as flex rows.
						Section 1 of body content will be an image, Section 2 will be text - juan
					-----------------------------------------------------------------------------------------------------------*/}
					<section className="Content-Background w-full h-full flex flex-row justify-center items-center gap-x-8 bg-neutral-400 p-x-24 ">
						{/*
						-------------------------------------------------------------
						Section 1: Image container. Image component goes inside - juan
						------------------------------------------------------------*/}
						<section className="Image-Container w-2/5 h-fit border-8 border-black flex justify-center items-center text-white text-xl">
							<Image src={homeImage} alt="Home image" />
						</section>
						{/*
						-------------------------------------------------------------
						Section 2: Text container. Two sub-sections go inside stacked as flex columns:
							Sub-section-1: Welcome text, Sub-section-2: User Account Buttons  - juan
						------------------------------------------------------------*/}
						<section className="w-[450px] h-full border-8 border-black flex flex-col justify-center gap-y-8 items-center text-white text-5xl bg-neutral">
							<div>A new way to search for the sounds you love</div>
							<div className="w-full flex flex-row gap-x-8 text-xl">
								{/*Subsitute bottom two divs with button components with user account functionality*/}
								<div>Log in.</div>
								<div>Create Account.</div>
							</div>
						</section>
					</section>
				</section>
			</main>
		</>
	);
}
