"use client";

// Import necessary dependencies and components
import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

// Define the SearchInput component
const SearchInput = () => {
	const router = useRouter();
	const [titleVal, setTitleValue] = useState<string>("");
	const titleDebouncedValue = useDebounce<string>(titleVal, 500);

	const [keyVal, setKeyValue] = useState<string>("");
	const keyDebouncedValue = useDebounce<string>(keyVal, 500);

	const [minBPM, setMinBPM] = useState<number>(50);
	const [maxBPM, setMaxBPM] = useState<number>(250);

	const [isMinor, setMinor] = useState(false);
	const [keyLetter, setKeyLetter] = useState("All");

	const handleBPMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMinBPM(Number(e.target.value));
	};

	const handleCheckboxChange = () => {
		setMinor((prevMinor) => !prevMinor);
	};

	useEffect(() => {
		let tone = "major";
		if (isMinor) {
			tone = "minor";
		}
		let newKeyValue = `${keyLetter} ${tone}`;
		setKeyValue(newKeyValue);
	}, [keyLetter, isMinor]);

	useEffect(() => {
		if (maxBPM < minBPM) {
			setMinBPM(maxBPM);
		}
	}, [maxBPM, minBPM]);

	useEffect(() => {
		const query = {
			title: titleDebouncedValue,
			key: keyDebouncedValue,
			minBPM: minBPM,
			maxBPM: maxBPM,
		};

		const url = qs.stringifyUrl({
			url: "/dashboard/search",
			query,
		});

		router.push(url);
	}, [titleDebouncedValue, keyDebouncedValue, minBPM, maxBPM, router]);

	return (
		<>
			<div className="flex flex-row gap-1 w-full justify-between">
				<Input
					className="w-[40%] min-w[450px]"
					placeholder="What do you want to listen to?"
					value={titleVal}
					onChange={(e) => setTitleValue(e.target.value)}
				/>

				<div className="flex flex-col gap-1">
					<label>Min BPM: {minBPM}</label>
					<input
						type="range"
						min="0"
						max={maxBPM}
						value={minBPM}
						onChange={handleBPMChange}
					></input>
				</div>

				<div className="flex flex-col gap-1">
					<label>Max BPM: {maxBPM}</label>
					<input
						type="range"
						min="0"
						max="300"
						value={maxBPM}
						onChange={(e) => setMaxBPM(Number(e.target.value))}
					></input>
				</div>
				<div className="flex flex-row gap-4">
					<div className="flex flex-col gap-1">
						<label>Music Key</label>
						<select
							className="text-black h-fit"
							value={keyLetter}
							onChange={(e) => setKeyLetter(e.target.value)}
						>
							<option value="All">All</option>
							<option value="A">A</option>
							<option value="B">B</option>
							<option value="C">C</option>
							<option value="D">D</option>
							<option value="E">E</option>
							<option value="F">F</option>
							<option value="G">G</option>
						</select>
					</div>
					<div className="flex flex-col gap-2">
						<label>Minor</label>
						<input
							type="checkbox"
							checked={isMinor}
							onChange={handleCheckboxChange}
						></input>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchInput;
