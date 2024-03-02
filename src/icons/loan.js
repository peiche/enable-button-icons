/**
 * WordPress dependencies
 */
import { Path, SVG, G, Circle, Line } from '@wordpress/primitives';

const loan = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<G
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			fill="none"
			stroke="currentcolor"
		>
			<Circle cx="15" cy="6" r="5" stroke="currentcolor"></Circle>
			<Path d="M17,16h1.838a3,3,0,0,1,2.846,2.051L22,19,10.532,22.529a4,4,0,0,1-2.965-.246L1,19V12H2c1.105,0,3.906.438,5,2h3a4,4,0,0,1,4,4H8"></Path>
			<Line x1="15" y1="5" x2="15" y2="7" stroke="currentColor"></Line>
		</G>
	</SVG>
);

export default loan;
