import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import logo from './images/gsap.png';
import './App.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = [
	{
		title: 'Architecto aliquam',
		subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
	},
	{
		title: 'Ceritatis placeat',
		subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
	},
	{
		title: 'Vitae voluptates',
		subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
	}
];

const App = () => {

	const [background, setBackground] = useState('#1C527D');
	const headerRef = useRef(null);

	const revealRefs = useRef([]);
	revealRefs.current = [];

	const toggleBackground = () => {
		const color = background !== '#1C527D' ? '#1C527D' : '#DC7F30';
		setBackground(color);
	}

	useEffect(() => {

		gsap.to(headerRef.current, { backgroundColor: background, duration: 1, ease: 'none' });

	}, [background]);

	useEffect(() => {

		gsap.from(headerRef.current, {
			autoAlpha: 0,
			ease: 'none',
			delay: 1
		});

		revealRefs.current.forEach((el, index) => {

			gsap.fromTo(el, {
				autoAlpha: 0,
				x: 100
			}, {
				duration: 1,
				autoAlpha: 1,
				x: 0,
				ease: 'none',
				scrollTrigger: {
					id: `section-${index + 1}`,
					trigger: el,
					start: 'top center+=100',
					toggleActions: 'play none none reverse'
				}
			});

		});

	}, []);

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};

	return (
		<div className="App">
			<header ref={headerRef} className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={() => toggleBackground()}>Change background</button>
			</header>
			<main className="App-main">
				{
					sections.map(({ title, subtitle }) => (
						<div className="App-section" key={title} ref={addToRefs}>
							<h2>{title}</h2>
							<p>{subtitle}</p>
						</div>
					))
				}
			</main>
		</div>
	);
}

export default App;
