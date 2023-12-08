import Header from "@/app/components/Header";
import ListItem from "@/app/components/ListItem";
import getSongs from "@/actions/getSongs";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Page() {
	const songs = await getSongs();

	return (
		<>
			<div className="h-full w-full flex flex-col bg-neutral-700">
				{/**Header */}
				<Header>
					<ListItem
						image="/images/liked.png"
						name="Liked Songs"
						href="/dashboard/liked"
					/>
				</Header>
				{/**body */}
				<div className="mt-2 mb-7 px-6">
					<div className="flex justify-between items-center">
						<h1
							className="
							text-white 
							text-2xl 
							font-semibold"
						>
							Newest Songs
						</h1>
					</div>
					<PageContent songs={songs} />
				</div>
			</div>
		</>
	);
}
