import React, {Component} from 'react';
import './stylesheets/credits.scss'

export default class Credits extends Component {
    render() {
        return (
		<div className='info'>
			<div>All songs written, produced, engineered and performed by Andy Watt at The Pillbox in Brooklyn, NY. Track 6 co-produced by Gary Wang.</div>
			<p>Gary Wang – acoustic bass, keyboards, and percussion on track 6; acoustic bass on track 7. Diego Voglino – drums on all tracks except 8; percussion on track 6. Nancy Hess – backup vocals on tracks 3, 5, 8 and 11. Marika Hughes – cello on tracks 3 and 10.</p>
			<p>Additional recording at The Sweat Shop, Brooklyn and Studio McPantaloon, Brooklyn.</p>
			<p>Mixed by Nancy Hess, except tracks 4 and 9, mixed by Bryce Goggin at Trout Recording. Mastered by Joe Lambert at Joe Lambert Mastering.</p>
			<p>All music and lyrics by Andy Watt (ASCAP). Photography and cover design by Anna Minkkinen.</p>
		</div>
        );
    }
}


