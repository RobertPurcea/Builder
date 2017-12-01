import React from 'react';
import styled from 'styled-components';

import { capitalize } from '../../../util/util';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	width: 50%;
	margin: auto;
	max-width: 500px;
	min-width: 300px;
	font-weight: bold;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

const Ingredient = styled.p``;

const Button = styled.button`
	color: white;
	display: block;
	font: inherit;
	padding: 5px;
	margin: 0 5px;
	width: 80px;
	border: 1px solid #AA6817;
	cursor: ${
		({ disabled }) => disabled ? 'not-allowed' : 'pointer'
	};
	outline: none;
	background-color: ${
		({ type }) => {
			switch(type) {
				case 'less':
					return '#dbb170'
				case 'more':
					return '#9e6d23'
				default:
					return 'grey'
			}
		}
	}
`;

const BuildControl = ({
	ingredientName,
	removeIngredient,
	addIngredient,
	disabled
}) => (
	<Wrapper>
		<Ingredient>{ capitalize(ingredientName) }</Ingredient>
		<ButtonWrapper>
			<Button type='more' onClick={() => addIngredient(ingredientName)}>More</Button>
			<Button
				type='less'
				disabled={disabled}
				onClick={() => removeIngredient(ingredientName)}>Less</Button>
		</ButtonWrapper>
	</Wrapper>
);

export default BuildControl;