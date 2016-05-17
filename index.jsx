import React from 'react';
import ReactDOM from 'react-dom';

import Articles from './app/Articles';

export default class CanulApp extends React.Component {
	render() {
		return (
			<div>
				<Articles></Articles>
			</div>
		);
	}
}

ReactDOM.render(<CanulApp />, document.getElementById('canul'));
