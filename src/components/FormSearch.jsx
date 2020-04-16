import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const FormSearch = () => {
	const {register, handleSubmit, errors} = useForm();

	const onSubmit = data => {
		alert(`nama sekolah : ${data.sekolah} , asal sekolah : ${data.asal}`);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
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
						placeholder='ketik nama sekolah'
						className='focus:placeholder-transparent appearance-none block w-full bg-grey-lighter text-grey-darker  py-2 px-4 focus:outline-none  mb-3'
						name='sekolah'
						ref={register({required: 'masukan nama sekolah!'})}
					/>
					<p className='text-red-400 absolute font-bold'>
						{errors.sekolah && errors.sekolah.message}
					</p>
				</div>
				<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					<label className='lg:float-left block  tracking-wider text-white text-xl font-bold mb-2'>
						Kota Asal
					</label>
					<select
						className='focus:placeholder-transparent appearance-none block w-full bg-grey-lighter text-grey-darker  py-2 px-4 focus:outline-none  mb-3'
						name='asal'
						ref={register({
							required: 'masukan kota asal sekolah',
							minLength: 1,
						})}
					>
						<option value='MEDAN'>MEDAN</option>
						<option value='JOGJA'>JOGJA</option>
					</select>
					<p className='text-red-600 italic'>
						{errors.asalKota && errors.asalKota.message}
					</p>
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
