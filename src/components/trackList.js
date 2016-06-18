import React, {Component} from 'react';
import './stylesheets/trackList.scss'

export default class TrackList extends Component {
    render() {
        return (
        <div>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/4903451&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false&amp;visual=false"></iframe>
        </div>
        );
    }
}




// import _ from 'lodash';
// import React from 'react';
// import TodosListHeader from './todos-list-header';
// import TodosListItem from './todos-list-item';
// // import './stylesheets/todos-list.scss'

// export default class TodosList extends React.Component {
//     renderItems() {
//         const props = _.omit(this.props, 'todos');

//         return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
//     }

//     render() {
//         return (
//             <table>
//                 <TodosListHeader />
//                 <tbody>
//                     {this.renderItems()}
//                 </tbody>
//             </table>
//         );
//     }
// }

