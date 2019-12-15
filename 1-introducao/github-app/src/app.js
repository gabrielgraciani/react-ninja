'use strict'
import React, {Component} from 'react';

class App extends Component{
	render(){
		return(
			<div className="app">
				<div className="search">
					<input type="search" placeholder="Digite o nome do usuário no github" />
				</div>
				<div className="user-info">
					<img src="https://avatars2.githubusercontent.com/u/487669?v=4" />
					<h1><a href="https://github.com/fdaciuk">Fernando daciuk</a></h1>

					<ul className="repos-info">
						<li>- Repositórios: 122</li>
						<li>- Seguidores: 10</li>
						<li>- Seguindo: 10</li>
					</ul>

					<div className="actions">
						<button>Ver respositórios</button>
						<button>Ver favoritos</button>
					</div>

					<div className="repos">
						<h2>Repositórios</h2>
						<ul>
							<li><a href="">Nome do repositório</a></li>
						</ul>
					</div>

					<div className="starred">
						<h2>Favoritos</h2>
						<ul>
							<li><a href="">Nome do repositório</a></li>
						</ul>
					</div>

				</div>
			</div>
		)
	}
}

export default App;