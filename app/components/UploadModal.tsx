"use client";

import Modal from "@/app/components/Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/Input";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import uniqid from "uniqid";
import { useRouter } from "next/navigation";
import analyzeSong from "@/utils/analyzeSong";

const UploadModal = () => {
	const uploadModal = useUploadModal();
	const [isLoading, setIsLoading] = useState(false);
	const { user, userDetails } = useUser();
	const supabaseClient = useSupabaseClient();
	const router = useRouter();

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			author: "",
			title: "",
			song: null,
			image: null,
		},
	});

	const onChange = (open: boolean) => {
		if (!open) {
			reset();
			uploadModal.closeModal();
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		const { title, image, song } = values;

		// replace spaces with underscores
		const titleWithNoSpaces = title.replace(/\s+/g, "_");
		try {
			setIsLoading(true);

			const imageFile = image?.[0];
			const songFile = song?.[0];

			if (!imageFile || !songFile || !user) {
				toast.error("Missing fields");
				return;
			}

			const uniqueID = uniqid();

			// upload song
			const { data: songData, error: songError } =
				await supabaseClient.storage
					.from("songs")
					.upload(`song-${titleWithNoSpaces}-${uniqueID}`, songFile, {
						cacheControl: "3600",
						upsert: false,
					});

			if (songError) {
				setIsLoading(false);
				return toast.error("Failed song upload.");
			}

			// upload images
			const { data: imageData, error: imageError } =
				await supabaseClient.storage
					.from("images")
					.upload(`image-${titleWithNoSpaces}-${uniqueID}`, imageFile, {
						cacheControl: "3600",
						upsert: false,
					});

			if (imageError) {
				setIsLoading(false);
				return toast.error("Failed image upload.");
			}

			const songAnalysis = await analyzeSong(
				`song-${titleWithNoSpaces}-${uniqueID}`
			);

			const { error: supabaseError } = await supabaseClient
				.from("songs")
				.insert({
					user_id: user.id,
					title: titleWithNoSpaces,
					artist: userDetails?.username,
					image_path: imageData.path,
					song_path: songData.path,
					bpm: songAnalysis.bpm,
					music_key: songAnalysis.key,
				});

			if (supabaseError) {
				setIsLoading(false);
				return toast.error(supabaseError.message);
			}

			router.refresh();
			setIsLoading(false);
			toast.success("Song created!");
			reset();
			uploadModal.closeModal();

			///// end of try block
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal
			title="Add a song"
			description="Upload an mp3 file"
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
			{isLoading ? (
				<div
					className="LoadingTemplate
				absolute
				top-0
				left-0
				w-full
				h-full
				bg-neutral-900/95
				rounded-md
				flex
				justify-center
				items-center"
				>
					Your song is uploading, please wait...
				</div>
			) : null}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-y-4"
			>
				<Input
					id="title"
					disabled={isLoading}
					{...register("title", { required: true })}
					placeholder="Song title"
				/>

				<div>
					<div className="pb-1">Select a song file</div>
				</div>
				<Input
					className="text-white"
					id="song"
					type="file"
					disabled={isLoading}
					accept=".mp3"
					{...register("song", { required: true })}
				/>

				<div>
					<div className="pb-1">Select an image file</div>
				</div>
				<Input
					className="text-white"
					id="image"
					type="file"
					disabled={isLoading}
					accept="image/*"
					{...register("image", { required: true })}
				/>
				<Button
					disabled={isLoading}
					type="submit"
					className="
            rounded-lg"
				>
					Create
				</Button>
			</form>
		</Modal>
	);
};

export default UploadModal;
