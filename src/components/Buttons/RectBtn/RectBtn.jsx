import React from 'react'
import * as styles from './RectBtn.module.css'

export const RectBtn = (props) => {
  return (
		<div className={`${styles.rectBtn} ${props.css}`}>
			<a href={props.url}>{props.text}</a>
		</div>
	);
}
