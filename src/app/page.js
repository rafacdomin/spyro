import { Card } from '@/components/card';
import { ExpandableCard } from '@/components/expandable_card';
import { Header } from '@/components/header';
import { Instructor } from '@/components/instructor';
import Image from 'next/image';

export default function Home() {
	const navLinks = [
		{ title: 'Classes', url: '#' },
		{ title: 'Team', url: '#' },
		{ title: 'About Us', url: '#' },
		{ title: 'Gallery', url: '#' },
	];

	const cards = [
		{
			title: 'GYM',
			description:
				'Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.',
			image: '/images/gym_card.png',
			expand: true,
		},
		{
			title: 'Zumba',
			image: '/images/zumba_card.png',
		},
		{
			title: 'Yoga',
			image: '/images/yoga_card.png',
		},
		{
			title: 'Martial Arts',
			image: '/images/martial_card.png',
		},
	];

	const classes = [
		{
			image: '/images/classes_1.png',
			title: 'Yoga',
			no_students: '29',
			category: 'Strength & Sweat',
			instructor: 'Esther Howard',
			time: '2 H',
			no_classes: '30',
			difficult: 'Beginner',
			learn_url: '',
			trail_url: '',
		},
		{
			image: '/images/classes_3.png',
			title: 'Fitness',
			no_students: '34',
			category: 'Total Body Burnout',
			instructor: 'Wade Warren',
			time: '4 H',
			no_classes: '45',
			difficult: 'Medium',
			learn_url: '',
			trail_url: '',
		},
		{
			image: '/images/classes_2.png',
			title: 'Yoga',
			no_students: '60',
			category: 'Bootcamp Challenge',
			instructor: 'Robert Fox',
			time: '3 H',
			no_classes: '52',
			difficult: 'Hard',
			learn_url: '',
			trail_url: '',
		},
	];

	const instructors = [
		{
			image: '/images/instructor_1.png',
			name: 'Jacob Jones',
			role: 'Gym trainer',
		},
		{
			image: '/images/instructor_2.png',
			name: 'Leslie Alexander',
			role: 'Gym trainer',
		},
		{
			image: '/images/instructor_3.png',
			name: 'Cameron Williamson',
			role: 'Gym trainer',
		},
		{
			image: '/images/instructor_4.png',
			name: 'Jane Cooper',
			role: 'Gym trainer',
		},
	];

	return (
		<>
			<Header links={navLinks} contact_url="#" />
			<main>
				<section
					className="flex justify-center py-96 items-start bg-intro bg-no-repeat bg-cover bg-center"
					id="introduction"
				>
					<div className="w-full max-w-screen-xl">
						<div className="flex flex-col gap-9 max-w-2xl">
							<Image
								src="/images/unleash.svg"
								alt="Unleash your Inner Athlete"
								width={494}
								height={218}
							/>
							<p>
								Get ready to sweat it out and achieve your fitness goals with
								our high-energy fitness classes! Our classes are designed to
								cater to all fitness levels and provide a fun and motivating
								environment to help you reach your peak performance.
							</p>
							<button className="w-fit px-11 py-2 bg-button bg-no-repeat bg-cover bg-center font-normal hover:brightness-90 transition-all duration-200">
								Start free trial
							</button>
						</div>
					</div>
				</section>

				<section className="flex flex-col items-center gap-24 py-28" id="about">
					<section className="flex flex-col items-center gap-14">
						<h1 className="font-semibold text-5xl">Find what moves you</h1>

						<ul className="flex gap-14 max-w-screen-xl">
							{cards &&
								cards.map((cardProps) => (
									<li key={cardProps.title}>
										<ExpandableCard {...cardProps} />
									</li>
								))}
						</ul>
					</section>

					<section className="flex flex-col w-full items-center gap-14">
						<h1 className="font-semibold text-5xl">Fit for your lifestyle</h1>
						<p className="max-w-2xl text-lg text-center">
							Wake up with a sunrise meditation, sweat it out with lunchtime
							HIIT, or unwind with an evening flow. You&apos;ll find movement
							for every mood with classes sorted by time, style, and skill
							level.
						</p>
						<div className="w-full flex justify-center bg-lifestyle bg-no-repeat bg-right-bottom pb-14">
							<Image
								src="/images/fit.png"
								alt="fit for your lifestyle"
								width={596}
								height={381}
							/>
						</div>
					</section>
				</section>

				<section
					className="flex flex-col items-center gap-9 bg-classes_background bg-center bg-cover bg-no-repeat py-10"
					id="classes"
				>
					<h1 className="font-semibold text-5xl">Classes</h1>
					<ul className="flex justify-between gap-10">
						{classes.map((data) => (
							<li key={data.title}>
								<Card data={data} />
							</li>
						))}
					</ul>
					<button className="w-fit px-16 py-2 bg-button bg-no-repeat bg-cover bg-center font-normal hover:brightness-90 transition-all duration-200">
						See all
					</button>
				</section>

				<section
					className="flex flex-col items-center gap-9 pt-20 mb-20 bg-instructors_background bg-no-repeat bg-left-bottom"
					id="instructors"
				>
					<h1 className="font-semibold text-5xl">Instructors</h1>

					<ul className="flex justify-between gap-5">
						{instructors.map(({ name, role, image }) => (
							<li key={name}>
								<Instructor name={name} role={role} image={image} />
							</li>
						))}
					</ul>
				</section>

				<section id="download" className="bg-orange flex flex-col items-center">
					<div className="flex items-center max-w-6xl">
						<aside className="flex flex-col gap-10">
							<h1 className="font-semibold text-5xl">
								Download the most loved fitness app
							</h1>
							<p className="font-semibold text-lg">
								Start your fitness journey with us. Join the cult
							</p>

							<div className="flex gap-6">
								<a href="#">
									<Image
										src="/images/android_btn.svg"
										alt="Google Play"
										width="194"
										height="60"
									/>
								</a>

								<a href="#">
									<Image
										src="/images/apple_btn.svg"
										alt="AppS Store"
										width="186"
										height="60"
									/>
								</a>
							</div>
						</aside>

						<Image
							src="/images/mobile.png"
							alt="mobile"
							width="543"
							height="520"
						/>
					</div>
				</section>

				{/* <section
					id="feedback"
					className="flex flex-col items-center py-12 bg-classes_background bg-center bg-cover bg-no-repeat"
				>
					<h1 className="text-5xl font-semibold">Client&apos;s Feedback</h1>
				</section>

				<section id="faq" className="flex flex-col items-center">
					<h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
				</section> */}
			</main>

			<footer className="flex flex-col items-center pt-16 pb-5 bg-footer_background bg-center bg-cover bg-no-repeat">
				<div className="flex flex-col items-center gap-7 max-w-4xl w-full text-center">
					<h1 className="font-extrabold text-3xl text-orange">SPYRO</h1>
					<p className="max-w-2xl">
						Join us today and experience the transformative power of our fitness
						classes. Don&apos;t wait to start your fitness journey. Take the
						first step towards a healthier, stronger you. Let&apos;s sweat, have
						fun, and make fitness a way of life together!
					</p>

					<hr className="border-t border-solid border-white w-full" />

					<span>
						&copy; SPYRO 2023. Developed by{' '}
						<a
							className="text-orange hover:brightness-90 transition-all duration-200"
							href="https://rafaeldomingues.dev"
						>
							rafaeldomingues.dev
						</a>
					</span>
				</div>
			</footer>
		</>
	);
}
