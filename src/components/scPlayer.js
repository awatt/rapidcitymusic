import React, {Component} from 'react';
import PaperList from './paper-list'
import CircularProgress from 'material-ui/CircularProgress';

export default class TrackList extends Component {
    render() {

    	const styles = {
    		progressStyles: {
    			position: 'absolute',
    			top: '50%',
    			left: '50%',
    			height: '100%',
    		}
    	}
    	
    	// <CircularProgress style={styles.progressStyles} size={2}/>

        return (
        <div>
        <iframe width="100%" height="450" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/4903451&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false&amp;visual=false"></iframe>
        </div>
        );
    }
}