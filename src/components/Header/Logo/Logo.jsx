import React from 'react';
import { default as logoSmall } from '../../../assets/images/lg-logo.png';

export const Logo = (props) => {
	return (
		<div className='container'>
			<div className='flex justify-center'>
				<img src={logoSmall} alt='' className={props.style} />
			</div>
		</div>
	);
};
