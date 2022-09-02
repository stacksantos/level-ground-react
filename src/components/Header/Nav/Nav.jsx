import React from 'react';

export const Nav = () => {
	return (
		<div className='container'>
			<ul className='flex flex-col lg:flex-row min-h-[130px] lg:min-h-0  text-6xl lg:text-3xl text-left uppercase lg:font-medium  text-slate-700'>
				<li>
					<a href='' className='lg:mr-5 hover:text-black'>
						Classes
					</a>
				</li>
				<li className='min-w-full text-right lg:text-left ml-8 lg:ml-0'>
					<a href='' className='hover:text-black'>
						Hire Us
					</a>
				</li>
			</ul>
		</div>
	);
};
