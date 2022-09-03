import React from 'react';
import { useState } from 'react';
import { RoundedBtn } from '../Buttons/RoundedBtn/RoundedBtn';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';

export const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<div className='container'>
				{/* -------------------------------------------------------------------------- */
				/*                                 MOBILE MENU                                */
				/* -------------------------------------------------------------------------- */}
				<section className='flex lg:hidden'>
					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						<div className='lg:hidden cursor-pointer mb-10 hover:animate-pulse hover:text-red-900 border-2 border-black rounded-full'>
							<span
								onClick={() => setIsNavOpen(false)}
								className='text-black  p-7  text-xl uppercase font-medium hover:text-red-900  cursor-pointer'
							>
								Close menu
							</span>
						</div>

						<ul className='flex flex-col items-start'>
							<li className='mb-10'>
								<Nav />
							</li>
							<li>
								<RoundedBtn
									text='Donate'
									url='#'
									css='bg-black cursor-pointer text-sky-300 border border-blue-600 hover:animate-bounce py-6 px-20 text-3xl lg:text-md w-min flex justify-center items-center rounded-lg uppercase'
								/>
							</li>
						</ul>
					</div>
				</section>
				{/* -------------------------------------------------------------------------- */
				/*                                  FULL MENU                                 */
				/* -------------------------------------------------------------------------- */}
				<div className='mt-4 justify-center items-center flex px-20'>
					<div className='w-1/3 hidden lg:flex'>
						<Nav />
					</div>
					<div className='w-1/3 flex flex-col items-center'>
						<Logo />
						<div className='mt-10 lg:hidden cursor-pointer hover:animate-pulse hover:text-red-900 border-2 border-black rounded-full'>
							<span
								className='text-xl uppercase font-medium p-7 text-black '
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								Menu
							</span>
						</div>
					</div>
					<div className='w-1/3 justify-end hidden lg:flex'>
						<RoundedBtn
							text='Donate'
							url='#'
							css='bg-white text-md w-min px-7 flex justify-center items-center rounded-lg uppercase font-medium hover:bg-black hover:text-white'
						/>
					</div>
				</div>
				<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 70vh;
        top: 0;
        left: 0;
        background-color: rgb(219, 234, 254, .95);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		border-radius: 0 0 10px 10px;
      }
    `}</style>
			</div>
		</>
	);
};
