import React from 'react';
import * as styles from './RoundedBtn.module.css';

export const RoundedBtn = (props) => {
	return (
		<div className={`${styles.roundedBtn} ${props.css}`}>
			<a href={props.url}>{props.text}</a>
		</div>
	);
};
