import React from 'react';
import styled from 'styled-components';

import BuildControl from './BuildControl';

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

const BuildControls = ({ ingredients, removeIngredient, addIngredient, price }) => {
	const controlComponents = Object.keys(ingredients).map(ingredientName => (
		<BuildControl
			ingredientName={ingredientName}
			lessIngredientHandler={removeIngredient}
			moreIngredientHandler={addIngredient}
			disabled={ingredients[ingredientName] === 0} />
	));

	return (
		<Wrapper>
			<p>Current Price: <strong>{price.toFixed(2)}</strong></p>
			{ controlComponents }
		</Wrapper>
	);
}

export default BuildControls;