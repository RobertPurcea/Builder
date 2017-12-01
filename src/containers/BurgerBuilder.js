import React, { Component } from 'react'

import Wrapper from '../hoc/Wrapper';
import BurgerPreview from '../components/Burger/Preview/BurgerPreview';
import BuildControls from '../components/Burger/Controls/BuildControls';

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 1,
			meat: 1,
			salad: 1
		}
	}

	addIngredient = (ingredientName) => {
		this.setState(prevState => ({
			ingredients: {
				...prevState.ingredients,
				[ingredientName]: prevState.ingredients[ingredientName] + 1
			}
		}))
	}

	
	removeIngredient = (ingredientName) => {
		this.setState(prevState => ({
			ingredients: {
				...prevState.ingredients,
				[ingredientName]: prevState.ingredients[ingredientName] - 1
			}
		}))
	}

	render() {
		return (
			<Wrapper>
				<BurgerPreview ingredients={this.state.ingredients}/>
				<BuildControls />
			</Wrapper>
		);
	}
}

export default BurgerBuilder;