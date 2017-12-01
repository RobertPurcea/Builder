import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import { capitalize } from '../../util/util';

const OrderSummary = ({ ingredients }) => {
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
			<p>Continue to checkout?</p>		
		</Wrapper>
	);
}

export default OrderSummary;