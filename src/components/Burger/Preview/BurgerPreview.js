import React from 'react';
import styled from 'styled-components';

import BurgerIngredient from './BurgerIngredient';

const BurgerWrapper = styled.div`
	width: 70%;
	margin: auto;
	height: 300px;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;

	@media (min-width: 500px) and (min-height: 400px) {
		width: 350px;
		height: 350px;
	}
`;

const NoIngredientsMessage = styled.p`
	width: 80%;
	margin: auto;
`;

const BurgerPreview = ({ ingredients }) => {

	// transform the ingredients object into a flat array of JSX elements
	const ingredientComponents = [];

	const ingredientNames = Object.keys(ingredients);
	ingredientNames.forEach(ingredientName => {
		const ingredientCount = ingredients[ingredientName];

		for (let i = 0; i < ingredientCount; i++) {
			ingredientComponents.push(
				<BurgerIngredient type={ingredientName} key={ingredientName + i} />
			);
		}
	});

	// if no ingredients are present, render a message instead
	return (
		<BurgerWrapper>
			<BurgerIngredient type='bread-top' />
			{
				ingredientComponents.length 
					? ingredientComponents
					: <NoIngredientsMessage>Please start adding ingredients</NoIngredientsMessage>
			}
			<BurgerIngredient type='bread-bottom' />
		</BurgerWrapper>
	);
}

export default BurgerPreview;
