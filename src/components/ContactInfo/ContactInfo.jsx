import React from 'react';

export const ContactInfo = () => {
	return (
		<div className='container'>
			<div className='flex flex-col items-center'>
				<h4 className='text-white mb-2 w-5/6 text-center'>LEVEL GROUND MIXED MARTIAL ARTS</h4>
				<p className='font-thin text-2xl text-center text-slate-400 mb-4'>
					50 Milk Street, Floor 17
					<br /> Boston, Ma, 02109
					<br /> 410-533-2210
				</p>
				<p className='font-slim text-slate-300 text-md mb-4'>
					Ali@LevelGroundMMA.org
				</p>
			</div>
		</div>
	);
};
