import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/app/components/SearchInput";
import SearchHeader from "@/app/components/SearchHeader";

import SearchContent from "./components/SearchContent";
import getSongsByKey from "@/actions/getSongsByKey";

export const revalidate = 0;

interface SearchProps {
	searchParams: { title: string; key: string; maxBPM: string; minBPM: string };
}

const Search = async ({ searchParams }: SearchProps) => {
	const songs = await getSongsByTitle(
		searchParams.title,
		searchParams.key,
		searchParams.maxBPM,
		searchParams.minBPM
	);

	return (
		<div
			className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
		>
			<SearchHeader className="from-bg-neutral-900">
				<div className="mb-2 flex flex-col gap-y-6 w-full h-fit">
					<h1 className="text-white text-3xl font-semibold">Search</h1>
					<SearchInput />
				</div>
			</SearchHeader>
			<SearchContent songs={songs} />
		</div>
	);
};

export default Search;
