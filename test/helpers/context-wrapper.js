import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function (node) {
	return shallow( node, { context: { muiTheme: getMuiTheme() } }
);
};




