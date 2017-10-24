import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById, removeCharacterById } from '../actions';

class HeroList extends Component {
    render() {
        return (
            <div>
				<h4>Heroes</h4>
				{
					this.props.heroes.map(hero =>{
						return(
							<li key={hero.id} className="list-group-item">
								<div className="list-item">
									{hero.name}
								</div>
								<div className="list-items right-button" onClick={() => this.props.removeCharacterById(hero.id)}>x</div>
							</li>
						);
					})
				}
			</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);