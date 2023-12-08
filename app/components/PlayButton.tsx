import { BsFillPlayCircleFill } from "react-icons/bs";

const PlayButton = () => {
	return (
		<button
			className="
        transition 
        w-11/12
        h-11/12
        opacity-0 
        rounded-full 
        flex
        items-end
        justify-end 
        bg-sky-500 
        p-1
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-110
      "
		>
			<BsFillPlayCircleFill className="text-black w-full h-full" />
		</button>
	);
};

export default PlayButton;
