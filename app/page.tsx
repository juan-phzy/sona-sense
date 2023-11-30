import Navbar from "./components/Navbar";

export default function Page() {
	return (
		<>
			<main className="Site-Container w-screen h-screen flex flex-col">
				<div>
					<Navbar />
				</div>

				<div className="Main-Content w-full h-full flex flex-row justify-center items-center gap-x-8 bg-neutral-700 p-24 ">
					<div className="Image-Container w-[450px] h-[350px]	border-8 border-black flex justify-center items-center text-white text-xl">
						Substitute Image Component here with free stock image. Include
						citation from image source in final report
					</div>

					<div className="w-[450px] h-[355px]	border-8 border-black flex flex-col justify-center gap-y-8 items-center text-white text-5xl bg-neutral">
						<div>A new way to search for the sounds you love</div>
						<div className="w-full flex flex-row gap-x-8 text-xl">
							{/*Subsitute bottom two divs with button components with user account functionality*/}
							<div>Log in.</div>
							<div>Create Account.</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
