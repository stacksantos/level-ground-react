import React from 'react'

export const RectBtn = (props) => {
  return (
		<div className={`${styles.rectBtn} ${props.css}`}>
			<a href={props.url}>{props.text}</a>
		</div>
	);
}
