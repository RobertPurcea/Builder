import React, { Component } from 'react'

import Wrapper from '../hoc/Wrapper';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';

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
		purchaseMode: false
	}

	openPurchaseMode = () => {
		this.setState(prevState => ({
			purchaseMode: true
		}))
	}

	cancelPurchase = () => {
		this.setState(prevState => ({
			purchaseMode: false
		}))
	}

	continuePurchase = () => {
		alert("You continued");
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
		const { ingredients, totalPrice, purchasable, purchaseMode } = this.state;

		return (
			<Wrapper>
				<Modal show={purchaseMode}>
					<OrderSummary
						ingredients={ingredients}
						price={totalPrice}
						continueHandler={this.continuePurchase}
						cancelHandler={this.cancelPurchase}
						/>
				</Modal>
				<Backdrop show={purchaseMode} onClick={this.cancelPurchase} />

				<BurgerPreview ingredients={ingredients}/>
				<BuildControls
					ingredients={ingredients}
					removeIngredient={this.removeIngredient}
					addIngredient={this.addIngredient}
					price={totalPrice}
					purchasable={purchasable}
					openPurchaseMode={this.openPurchaseMode} />
			</Wrapper>
		);
	}
}

export default BurgerBuilder;