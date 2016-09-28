import React, {Component} from 'react';

export default class Credits extends Component {
    render() {
        return (
		<div className='info'>
			<h2 className='creditsTitle'>ALBUM CREDITS</h2>
			<p>All songs written, produced, engineered and performed by <span className='contributor'>Andy Watt</span> at The Pillbox in Brooklyn, NY.</p>
			<p>Track 6 co-produced by <span className='contributor'>Gary Wang</span>.</p>
			<p>Additional recording at The Sweat Shop and Studio McPantaloon in Brooklyn, NY.</p>
			<p><span className='contributor'>Diego Voglino</span> – drums on all tracks except 8; percussion on track 6.</p>
			<p><span className='contributor'>Gary Wang</span> – acoustic bass, keyboards, and percussion on track 6; acoustic bass on track 7.</p>
			<p><span className='contributor'>Nancy Hess</span> – backup vocals on tracks 3, 5, 8 and 11.</p>
			<p><span className='contributor'>Marika Hughes</span> – cello on tracks 3 and 10.</p>
			<p>Mixing on tracks 1-3, 5-8 and 10-13 by <span className='contributor'>Nancy Hess</span>.</p>
			<p>Mixing on tracks 4 and 9, by <span className='contributor'>Bryce Goggin</span> at Trout Recording.</p>
			<p>Mastered by Joe Lambert at <span className='contributor'>Joe Lambert</span> Mastering.</p>
			<p>All music and lyrics by <span className='contributor'>Andy Watt</span> (ASCAP).</p>
			<p>Photography and cover design by <span className='contributor'>Anna Minkkinen</span>.</p>
		</div>
        );
    }
}


