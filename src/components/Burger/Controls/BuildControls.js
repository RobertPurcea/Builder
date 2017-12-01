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

const BuildControls = (props) => {
	return (
		<Wrapper>
			<BuildControl />
		</Wrapper>
	);
}

export default BuildControls;