import React from 'react';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { Logo } from '../Header/Logo/Logo';
import { Sitemap } from '../Sitemap/Sitemap';
import { Socials } from '../Socials/Socials';

export const Footer = () => {
	return (
		<div className='container'>
			<div className='flex flex-wrap justify-center md:justify-between'>
				<div className='flex flex-col mb-10 px-10'>
					<div className='mb-3'>
						<Socials />
					</div>
					<Sitemap />
				</div>
				<div className='px-10'>
					<ContactInfo />
				</div>
			</div>

			<div>
				<p className='text-white font-thin border-t-2 mt-4 pt-8 px-4 text-center'>
					Level Ground Mixed Martial Arts is a tex-exempt, 501(c)3 organization
					under the IRS. EIN 46-3915852
				</p>
			</div>
			<div className='mt-6'>
				<Logo style='rounded-full' />
			</div>
		</div>
	);
};
