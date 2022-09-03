import React from 'react';
import { useState } from 'react';
import { RoundedBtn } from '../Buttons/RoundedBtn/RoundedBtn';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { RiCloseCircleFill } from 'react-icons/Ri';
import { CgMenuRound } from 'react-icons/Cg';

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
						<RiCloseCircleFill
							onClick={() => setIsNavOpen(false)}
							className='text-black mb-10 lg:hidden text-5xl hover:text-red-900 hover:animate-spin cursor-pointer'
						/>
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
						<CgMenuRound
							className='text-6xl text-black mt-10 lg:hidden cursor-pointer hover:animate-pulse'
							onClick={() => setIsNavOpen((prev) => !prev)}
						/>
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
