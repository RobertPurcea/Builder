import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

const Button = styled.button`
	display: block;
	font: inherit;
	padding: 5px;
	margin: 0 5px;
	width: 80px;
	border: 1px solid #AA6817;
	cursor: pointer;
	outline: none;
`;

const BuildControl = (props) => (
	<Wrapper>
		<Button>Click me</Button>
		<Button>Click mee</Button>
		<Button>Click meee</Button>
	</Wrapper>
);

export default BuildControl;