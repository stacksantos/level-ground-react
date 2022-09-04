import './App.css';
import { RectBtn } from './components/Buttons/RectBtn/RectBtn';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
	const gymImg = {
		'background-image':
			'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
		'background-size': 'cover',
		'background-position': 'center',
	};

	return (
		<div className='App flex flex-col items-center'>
			<div className='w-full flex justify-center'>
				<Header />
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                  SECTION 1                                 */
			/* -------------------------------------------------------------------------- */}
			<div className='container lg:my-32 my-10 flex flex-col items-center'>
				<h2 className='uppercase text-6xl text-center md:px-10 px-3'>
					Where grit meets opportunity
				</h2>
				<p className='my-12 w-5/6 lg:w-2/3 text-2xl text-center'>
					At Level Ground (LG), urban youth cultivate grit and resilience
					through Mixed Martial Arts. They learn to apply these values 'off the
					mat' in the pursuit of their ambitions through our Student Trainer
					Certifications and College Access programs.
				</p>
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                  SECTION 2                                 */
			/* -------------------------------------------------------------------------- */}
			<div className='w-full  bg-white'>
				<div className='my-20 flex flex-col items-center'>
					<h3 className='text-black text-5xl uppercase font-medium my-9'>
						Why
					</h3>
					<p className='text-black mt-2 mb-20 w-5/6 md:w-2/3 lg:w-1/2 lg:text-2xl text-center text-xl'>
						Youth joining our organization are exposed to a variety of
						challenges to enhance their adaptability in the world. We create an
						environment in which each obstacle is specifically designed to level
						up a particular subset of skills they could improve in. From there
						we regularly schedule screenings to further document and maintain
						their growth along the way.
						<br />
						<br />
						We want to enhance our youth. Because they are the{' '}
						<span className='font-bold uppercase text-2xl animate-pulse'>
							future
						</span>
						.
					</p>
				</div>
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                  SECTION 3                                 */
			/* -------------------------------------------------------------------------- */}
			<div className='w-full bg-slate-200'>
				<div className='flex flex-col items-center'>
					<div className='w-2/3 h-64 mb-3 mt-14 rounded-lg' style={gymImg}></div>
					<div className='flex flex-wrap md:flex-nowrap mt-10 mb-20 lg:px-32 text-black'>
						<div className='flex flex-col items-center md:w-5/6'>
							<h3 className='text-2xl md:text-3xl font-medium uppercase mb-4 text-center'>
								Visit the gym
							</h3>
							<p className='text-lg md:text-xl md:w-5/6 text-center lg:text-left md:px-10 px-20'>
								Nostrud aute labore eiusmod sunt fugiat. Anim id cupidatat nulla
								aliquip enim. Exercitation nulla consequat cillum irure.
								Adipisicing dolore ullamco deserunt minim ex cillum minim ea.
								Tempor elit est deserunt
							</p>
							<div className='mt-5'>
								<a href='#'>
									<RectBtn
										text='See classes'
										css='bg-clear border border-black py-3 mb-9 w-56 text-2xl flex justify-center items-center uppercase font-medium hover:bg-black hover:text-white'
									/>
								</a>
							</div>
						</div>
						<div className='flex flex-col items-center md:w-5/6'>
							<h3 className='text-2xl md:text-3xl font-medium uppercase mb-4 text-center'>
								Have us visit you
							</h3>
							<p className='text-lg md:text-xl md:w-5/6 md:px-10 px-20 text-center lg:text-left'>
								Nostrud aute labore eiusmod sunt fugiat. Anim id cupidatat nulla
								aliquip enim. Exercitation nulla consequat cillum irure.
								Adipisicing dolore ullamco deserunt minim ex cillum minim ea.
								Tempor elit est deserunt
							</p>
							<div className='mt-5'>
								<a href='#'>
									<RectBtn
										text='Hire us'
										css='bg-clear border border-black py-3 w-56 text-2xl flex justify-center items-center uppercase font-medium hover:bg-black hover:text-white'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                  SECTION 4                                 */
			/* -------------------------------------------------------------------------- */}
			<div className='w-full bg-slate-100'>
				<div className='flex flex-col items-center my-20 text-black'>
					<h3 className='text-black text-4xl uppercase text-center w-5/6 font-medium my-9'>
						Volunteer with level ground
					</h3>
					<p className='text-black mt-2 mb-10 w-5/6 lg:w-2/3 text-center text-xl md:text-2xl'>
						Quis veniam sint dolor sit aliqua laborum eu labore. Eiusmod
						cupidatat occaecat adipisicing elit sint eu laborum pariatur ex
						fugiat in reprehenderit non occaecat. Ipsum consectetur amet
						exercitation incididunt id voluptate eu et. Ut excepteur eiusmod
						quis elit veniam ullamco eu cupidatat. Deserunt proident esse
						exercitation quis commodo irure do qui amet duis. Elit esse laboris
						ea tempor ipsum cupidatat in ut officia dolore voluptate est nulla.
					</p>
					<a href='#'>
						<RectBtn
							text='Volunteer'
							css='bg-clear border border-black py-3 w-56 text-2xl flex justify-center items-center uppercase font-medium hover:bg-black hover:text-white'
						/>
					</a>
				</div>
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                   FOOTER                                   */
			/* -------------------------------------------------------------------------- */}
			<div className='w-full bg-slate-900'>
				<div className='flex flex-col items-center my-20 text-black px-4 lg:px-32'>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
