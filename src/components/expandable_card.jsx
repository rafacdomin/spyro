import Image from 'next/image';
import Link from 'next/link';

export const ExpandableCard = ({
	expand = false,
	image,
	title,
	description,
	href = '',
}) => {
	if (expand) {
		return (
			<Link
				href={href}
				className="overflow-hidden hover:brightness-90 transition-all duration-200"
				style={{ borderTopLeftRadius: 130 }}
			>
				<div>
					<Image src={image} alt={title} width={511} height={299} />
				</div>

				<span className="flex gap-14 max-w-lg justify-center items-center">
					<h1 className="font-regular text-4xl">{title}</h1>

					<p className="font-light ">{description}</p>
				</span>
			</Link>
		);
	}

	return (
		<Link
			href={href}
			className="overflow-hidden relative hover:brightness-90 transition-all duration-200"
			style={{ borderTopLeftRadius: 50 }}
		>
			<div>
				<Image src={image} alt={title} width={160} height={400} />
			</div>

			<h1
				className="font-regular text-3xl absolute bottom-3 left-5"
				style={{ maxWidth: 110 }}
			>
				{title}
			</h1>
		</Link>
	);
};
