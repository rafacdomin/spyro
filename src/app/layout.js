import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
	weight: ['300', '400', '500', '600', '800'],
	subsets: ['latin'],
	style: ['normal'],
	display: 'swap',
});

export const metadata = {
	title: 'SPYRO',
	description: 'Unleash your Inner Athlete',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
