import React from 'react';
import styled from 'styled-components';

import BuildControl from './BuildControl';
import OrderButton from './OrderButton';

const Wrapper = styled.div`
	width: 100%;
	background-color: #CF8F2E;
	display: flex;
	flex-flow: column;
	align-items: center;
	box-shadow: 0 2px 1px #ccc;

	margin: auto;
	padding: 10px 0;
`;

const BuildControls = ({
	ingredients,
	removeIngredient,
	addIngredient,
	price,
	purchasable
}) => {
	const ingredientControls = Object.keys(ingredients).map(ingredientName => (
		<BuildControl
			ingredientName={ingredientName}
			removeIngredient={removeIngredient}
			addIngredient={addIngredient}
			disabled={ingredients[ingredientName] === 0}
			key={ingredientName} />
	));

	return (
		<Wrapper>
			<p>Current Price: <strong>{price.toFixed(2)}</strong></p>
			{ ingredientControls }
			<OrderButton disabled={!purchasable}>ORDER NOW</OrderButton>
		</Wrapper>
	);
}

export default BuildControls;