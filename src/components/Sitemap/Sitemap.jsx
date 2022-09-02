import React from 'react';
import { Nav } from '../Header/Nav/Nav';

export const Sitemap = () => {
	return (
		<div className='container'>
			<div className='flex flex-col my-1'>
				<h4 className='text-slate-500 text-xl mb-1'>Site Map</h4>
				<ul className='flex justify-between text-sm text-center uppercase text-white'>
					<a href='#'>
						<li className='hover:text-red-400 text-2xl'>Classes</li>
					</a>
					<a href='#'>
						<li className='hover:text-red-400 text-2xl'>Hire Us</li>
					</a>
				</ul>
			</div>
			<div className='flex flex-col'>
				<h4 className='text-slate-500 mb-1 text-xl'>Contribute</h4>
				<ul className='flex justify-between text-sm text-center uppercase text-white'>
					<a href='#'>
						<li className='hover:text-sky-400 text-2xl'>Give</li>
					</a>
					<a href='#'>
						<li className='hover:text-sky-400 text-2xl'>Volunteer</li>
					</a>
				</ul>
			</div>
		</div>
	);
};
