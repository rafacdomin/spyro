import Image from 'next/image';
import Link from 'next/link';

export const Card = ({
	data: {
		image,
		title,
		category,
		no_students,
		time,
		instructor,
		no_classes,
		difficult,
		learn_url = '',
		trail_url = '',
	},
}) => {
	return (
		<div className="flex flex-col gap-2.5">
			<Image src={image} alt="Yoga" width="374" height="263" />

			<div className="flex justify-between mt-2.5">
				<span className="flex items-center gap-2.5">
					<div className="rounded bg-orange p-1" /> {title}
				</span>

				<span className="flex gap-2.5 items-center">
					<Image src="/icons/users.svg" alt="students" width="25" height="25" />
					{no_students} students
				</span>
			</div>

			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">{category}</h1>

				<span className="flex gap-1.5 items-center">
					<Image src="/icons/timer.svg" alt="students" width="25" height="25" />
					{time}
				</span>
			</div>

			<p>Instructor: {instructor}</p>

			<ul className="list-disc ml-5">
				<li>No. of Classes: {no_classes}</li>

				<li>Difficult: {difficult}</li>
			</ul>

			<div className="flex justify-between mt-2.5">
				<Link
					href={learn_url}
					className="px-7 py-3 bg-orange_retangle bg-center bg-no-repeat hover:brightness-90 transition-all duration-200"
				>
					Learn more
				</Link>
				<Link
					href={trail_url}
					className="px-12 py-3 bg-transparent_retangle bg-center bg-no-repeat hover:brightness-90 transition-all duration-200"
				>
					Start a free Trail
				</Link>
			</div>
		</div>
	);
};
