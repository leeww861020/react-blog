/**
 * Created by wonwoo on 15. 12. 27..
 */
import React, { PropTypes, Component } from 'react';
import { Router, Route ,IndexRoute, hashHistory} from 'react-router';
import BlogMain from './BlogMain';
import Contents from './Contents';
import Content from './Content';
import NewContent from './NewContent';

/*
 *  Base App Component for Redirect Handling
 */
export default class Main extends Component {

	render() {

	   return (
	      <Router history={hashHistory}>
	        <Route name="blogMain" path="/" component={BlogMain}>
		        <IndexRoute component={Contents} />
	        	<Route path="content/:id" component={Content} />
		        <Route path="content/" component={NewContent} />
	        </Route>
	      </Router>
	   );
   }
}
