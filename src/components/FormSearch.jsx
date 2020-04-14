import React, {useState, useMemo} from 'react';

const FormSearch = () => {
	const initDaerah = [
		'Nanggroe Aceh Darussalam',
		'Sumatera Utara',
		'Sumatera Barat',
		'Sumatera Selatan',
		'Kepualan Riau',
	];

	const initSekolah = ['SMKN 1 Percut Sei Tuan', 'SMKN 1 Medan'];

	const initState = {
		sekolah: '',
		daerah: '',
	};

	const [sekolah] = useState(initSekolah);
	const [daerah] = useState(initDaerah);
	const [input, setInput] = useState(initState);

	const handleChange = e => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setInput(initState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className=' px-8 pt-6 pb-8 mb-10 flex flex-col my-2 font-Nunito'
			style={{maxWidth: '1300px', margin: 'auto'}}
		>
			<div className='lg:mx-64 md:flex mb-6'>
				<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					<label className='lg:float-left block  tracking-wider text-white text-xl font-bold mb-2'>
						Cari Sekolah
					</label>
					<input
						type='text'
						placeholder='ketik nama sekolah..'
						className='focus:placeholder-transparent appearance-none block w-full bg-grey-lighter text-grey-darker  py-2 px-4 focus:outline-none  mb-3'
						value={input.sekolah}
						onChange={handleChange}
						name='sekolah'
						autoComplete='off'
					/>
				</div>
				<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					<label className='lg:float-left block  tracking-wider text-white text-xl font-bold mb-2'>
						Daerah Asal
					</label>
					<input
						placeholder='ketik nama daerah..'
						className='appearance-none block text-gray-500 w-full bg-white  border py-2 px-4 btn  mb-3'
						list='daerah'
						name='daerah'
						value={input.daerah}
						onChange={handleChange}
						autoComplete='off'
					/>
					<datalist id='daerah' className='bg-white w-full absolute'>
						{daerah.map(daerah => (
							<option key={daerah} value={daerah} />
						))}
					</datalist>
				</div>
				<div>
					<button
						type='submit'
						className='sm:my-10 leading-none border rounded h-10 w-16 font-bold tracking-wide text-white  btn hover:text-teal-500 hover:bg-white'
					>
						Cari
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormSearch;
