import Link from 'next/link';

export const Header = ({ links, contact_url }) => {
	return (
		<header className="flex justify-center">
			<div className="flex justify-between items-center w-full max-w-screen-xl mt-10">
				<h1 className="font-extrabold text-3xl text-orange">
					<Link href="">SPYRO</Link>
				</h1>

				<nav>
					<ul className="flex gap-10">
						{links &&
							links.map(({ title, url }) => (
								<li key={title}>
									<Link
										href={url}
										className="font-medium hover:brightness-90 transition-all duration-200"
									>
										{title}
									</Link>
								</li>
							))}
					</ul>
				</nav>

				<Link
					href={contact_url}
					className="font-medium px-11 py-2 bg-button bg-no-repeat bg-cover bg-center hover:brightness-90 transition-all duration-200"
				>
					Contact Us
				</Link>
			</div>
		</header>
	);
};
