import styled from 'styled-components';

const Backdrop = styled.aside`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ show }) => show ? 'block' : 'none'}
`;

export default Backdrop;