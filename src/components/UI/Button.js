import styled from 'styled-components';

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: ${({type}) => {
		switch(type){
			case 'success':
				return '#5C9210';
			case 'danger':
				return '#944317';
			default:
				return 'white';
		}
	}};
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;


	:first-of-type {
		margin-left: 0;
		padding-left: 0;
	}
`;

export default Button;