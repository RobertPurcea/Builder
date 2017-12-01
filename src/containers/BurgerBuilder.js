import React, { Component } from 'react'

import Wrapper from '../hoc/Wrapper';
import BurgerPreview from '../components/Burger/Preview/BurgerPreview';
import BuildControls from '../components/Burger/Controls/BuildControls';

const INGREDIENT_PRICE = {
	cheese: 0.5,
	meat: 1.2,
	salad: 0.2,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 0,
			meat: 0,
			salad: 0,
			bacon: 0
		},
		totalPrice: 4
	}

	addIngredient = (ingredientName) => {
		this.setState(prevState => ({
			ingredients: {
				...prevState.ingredients,
				[ingredientName]: prevState.ingredients[ingredientName] + 1
			},
			totalPrice: prevState.totalPrice + INGREDIENT_PRICE[ingredientName]
		}))
	}
	
	removeIngredient = (ingredientName) => {
		// when an ingredient has 0 instances, prevent removing it further
		if (this.state.ingredients[ingredientName] === 0) {
			return;
		}

		this.setState(prevState => ({
			ingredients: {
				...prevState.ingredients,
				[ingredientName]: prevState.ingredients[ingredientName] - 1
			},
			totalPrice: prevState.totalPrice - INGREDIENT_PRICE[ingredientName]
		}))
	}

	render() {
		return (
			<Wrapper>
				<BurgerPreview ingredients={this.state.ingredients}/>
				<BuildControls
					ingredients={this.state.ingredients}
					removeIngredient={this.removeIngredient}
					addIngredient={this.addIngredient}
					price={this.state.totalPrice} />
			</Wrapper>
		);
	}
}

export default BurgerBuilder;