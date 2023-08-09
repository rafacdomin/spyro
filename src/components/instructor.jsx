import Image from 'next/image';

export const Instructor = ({ image, name, role }) => (
	<div className="flex flex-col items-center">
		<Image
			className="cursor-pointer border border-transparent border-solid hover:border-amber-700 transition-all duration-200"
			src={image}
			alt={name}
			width="285"
			height="400"
		/>
		<h1 className="mt-5 text-xl font-medium">{name}</h1>
		<p className="mt-1.5">{role}</p>
	</div>
);
