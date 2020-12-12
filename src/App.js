import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import './App.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
	const revealRefs = useRef([]);
	revealRefs.current = [];

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
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
