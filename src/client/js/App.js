import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import request from 'superagent';


import {Button, Icon} from 'react-materialize';

export default () => (
	<Button waves='light'>
		<Icon>thumb_up</Icon>
	</Button>
);

import Presentacion from './components/Presentacion.js';
import LoginForm from './components/LoginForm.js';
import CreateUser from './components/CreateUser.js';
import PrincipalPage from './components/PrincipalPage.js';
import MenuNav from './components/MenuNav.js';
import CVForm from './components/CVForm.js';
import Category from './components/Category.js';
import FiltroCVs from './components/FiltroCVs.js';
import CVSolo from './components/CVSolo.js';
import NewCategory from './components/NewCategory.js';
import DynamicCv from './components/DynamicCv.js';
import DynamicEntrevistar from './components/DynamicEntrevistar.js';

class App extends React.Component {
	constructor(){
		super();

		this.state= {
			isAuthenticated:false
		}

		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleAuthentication(credentials){
		request
       .post('/auth/login')
       .send(credentials)
       .then(data => {
         this.setState({
           isAuthenticated: data.body.id ? true : false
         });
       })
       .catch(err => console.log(err));
	}

	handleLogout() {
     this.setState({
       isAuthenticated: false
     });
   }

	 componentWillMount() {
     request
       .get('/auth/current')
       .then(user => {
         this.setState({
           isAuthenticated: user.body.id ? true : false
         });
       })
       .catch(err => console.log(err));
   }
  render (){
		console.log('testing---',this.state.isAuthenticated);
    return (
			<div>
					<MenuNav
						handleLogout={this.handleLogout}
           	isAuthenticated={this.state.isAuthenticated}/>
					<Switch>
						<Route path='/principal' component={Presentacion} />
						<Route exact path='/login' render={props => (
							<LoginForm
								{...props}
								isAuthenticated={this.state.isAuthenticated}
								handleAuthentication={this.handleAuthentication} />
						)}/>
						<Route path='/createUser' component={CreateUser}/>
						<Route path='/principalPage' component={PrincipalPage}/>
						<Route path='/cv-form' component={CVForm}/>
						<Route path='/categories' component={Category}/>
						<Route path='/filtros' component={FiltroCVs}/>
						<Route path='/dinamic/cv' component={CVSolo}/>
						<Route path='/newcategory' component={NewCategory}/>
						<Route path='/dynamic/:cv' component={DynamicCv}/>
						<Route path='/interview/:entrevistar' component={DynamicEntrevistar}/>
					</Switch>

    </div>
	)
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
