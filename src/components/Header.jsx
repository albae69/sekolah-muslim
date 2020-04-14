import React, {useState} from 'react';
import {Search, Modal} from 'components/';
import {Link} from 'react-router-dom';
import JenjangSekolah from './JenjangSekolah';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<div className='header'>
			<div className='header-modal'>
				<Modal
					d={modal ? {display: 'block'} : {display: 'none'}}
					click={toggleModal}
				/>
			</div>
			<nav className='header-wrap font-Nunito md:mb-5'>
				<div className='header-wrap-title'>
					<Link to='/'>
						<span className='header-wrap-title-main md:mx-10 md:my-5 lg:text-4xl '>
							Sekolah Muslim
						</span>
					</Link>
				</div>
				<div className='block lg:hidden'>
					<button onClick={handleClick} className='header-menu-button btn'>
						<svg
							className='fill-current h-3 w-3'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div
					className={`w-full  ${
						open ? 'block' : 'hidden'
					}  lg:block lg:flex justify-between lg:items-center lg:w-auto tracking-wider md:my-6 md:ml-10 mr-10 md:mb-4 mb-0`}
				>
					<div className='lg:flex-grow'>
						<a
							href='#kontak'
							className='header-contact lg:inline-block lg:mt-0'
						>
							Kontak
						</a>
					</div>
					<div>
						<button
							onClick={toggleModal}
							className='header-tambah-sekolah lg:mt-0 btn'
						>
							Tambah Sekolah
						</button>
					</div>
				</div>
			</nav>
			<hr className='hr md:-my-6' />
			<Search />
			<div className='m-auto'>
				<JenjangSekolah />
			</div>
		</div>
	);
};

export default Header;
