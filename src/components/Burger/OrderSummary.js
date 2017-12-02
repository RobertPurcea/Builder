import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import { capitalize } from '../../util/util';

import Button from '../UI/Button';

const OrderSummary = ({ ingredients, continueHandler, cancelHandler, price }) => {
	let ingredientList = [];

	for (let ingredientName in ingredients) {
		const ingredientCount = ingredients[ingredientName];
		const capitalizedName = capitalize(ingredientName);

		ingredientList.push(<li	key={ingredientName}>{capitalizedName}: {ingredientCount}</li>)
	}

	return (
		<Wrapper>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>{ ingredientList }</ul>	
			<p><strong>Price: {price}</strong></p>
			<p>Continue to checkout?</p>		
			<Button type='success' onClick={continueHandler}>CONTINUE</Button>
			<Button type='danger' onClick={cancelHandler}>CANCEL</Button>
		</Wrapper>
	);
}

export default OrderSummary;