"use client";

import Modal from "@/app/components/Modal";
import {
	useSupabaseClient,
	useSessionContext,
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();
	const { onClose, isOpen } = useAuthModal();
	const { isLogin } = useAuthModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [is_artist, setIsArtist] = useState("No");
	const isArtist = is_artist === "Yes" ? true : false;

	const handleSignUp = async (email: string, password: string) => {
		const { data, error } = await supabaseClient.auth.signUp({
			email,
			password,
		});
		if (error) {
			toast.error(error.message);
		} else {
			toast.success("User Sign Up Successful");
		}

		if (data && data.user) {
			console.log(data.user.id);
			const { error: insertError } = await supabaseClient
				.from("users")
				.insert([
					{
						id: data.user.id,
						username,
						first_name,
						last_name,
						is_artist: isArtist,
					},
				]);

			if (insertError) {
				console.error(
					"Error inserting user into 'users' table:",
					insertError
				);
			}
		}

		router.push("/dashboard");
	};

	const handleSignIn = async (email: string, password: string) => {
		try {
			const { data, error } = await supabaseClient.auth.signInWithPassword({
				email,
				password,
			});
			if (error) {
				toast.error(error.message);
			} else {
				toast.success("User Sign In Successful");
			}
			router.push("/dashboard");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (isLogin) {
			handleSignIn(email, password);
		} else {
			handleSignUp(email, password);
		}
	};

	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);

	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Modal
			title="Welcome back"
			description={isLogin ? "Login to your account" : "Create an Account"}
			isOpen={isOpen}
			onChange={onChange}
		>
			{isLogin ? (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 justify-center items-center text-black"
				>
					{/* Your custom form inputs */}
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					{/* Your custom buttons and other UI elements */}
					<button type="submit" className="text-white bg-gray-600 p-2">
						Sign In
					</button>
				</form>
			) : (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 w-full justify-center items-center text-black"
				>
					{/* Your custom form inputs */}
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<input
						type="text"
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
					/>
					<input
						type="text"
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
					/>
					<label className="text-white">Are you an artist?</label>
					<select
						className="text-black"
						value={is_artist}
						onChange={(e) => setIsArtist(e.target.value)}
					>
						<option>Yes</option>
						<option>No</option>
					</select>
					{/* Your custom buttons and other UI elements */}
					<button className="text-white bg-gray-600 p-2" type="submit">
						Sign Up
					</button>
				</form>
			)}
		</Modal>
	);
};

export default AuthModal;
