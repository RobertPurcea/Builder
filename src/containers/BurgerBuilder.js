import React, { Component } from 'react'

import Wrapper from '../hoc/Wrapper';
import Modal from '../components/UI/Modal';

import BurgerPreview from '../components/Burger/Preview/BurgerPreview';
import BuildControls from '../components/Burger/Controls/BuildControls';
import OrderSummary from '../components/Burger/OrderSummary';

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
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	updatePurchasable = () => {
		const { ingredients } = this.state;

		const ingredientCount = Object.values(ingredients);
		this.setState({
			purchasable: Boolean(ingredientCount.reduce((sum, elem) => sum + elem))
		});
	}

	addIngredient = (ingredientName) => {
		this.setState(prevState => ({
			ingredients: {
				...prevState.ingredients,
				[ingredientName]: prevState.ingredients[ingredientName] + 1
			},
			totalPrice: prevState.totalPrice + INGREDIENT_PRICE[ingredientName]
		}), this.updatePurchasable)
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
		}), this.updatePurchasable)
	}

	render() {
		const { ingredients, totalPrice, purchasable } = this.state;

		return (
			<Wrapper>
				<Modal>
					<OrderSummary ingredients={ingredients}/>
				</Modal>
				<BurgerPreview ingredients={ingredients}/>
				<BuildControls
					ingredients={ingredients}
					removeIngredient={this.removeIngredient}
					addIngredient={this.addIngredient}
					price={totalPrice}
					purchasable={purchasable} />
			</Wrapper>
		);
	}
}

export default BurgerBuilder;