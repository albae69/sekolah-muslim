import React from 'react';
import NumberFormat from 'react-number-format';
import {useForm} from 'react-hook-form';

const FormAdd = ({uang, setUang, image, handleImage, onSubmit}) => {
	const {register, handleSubmit} = useForm();

	return (
		<form
			onClick={e => e.stopPropagation()}
			onSubmit={handleSubmit(onSubmit)}
			className='form'
		>
			<div className='-mx-3 md:flex mb-4'>
				<div className='md:w-full px-3 mb-6 md:mb-0'>
					<label className='label md:text-xl'>Nama Sekolah</label>
					<input
						className='input bg-grey-lighter border-grey-lighter'
						type='text'
						placeholder='nama sekolah'
						name='namaSekolah'
						ref={register({required: true})}
					/>
				</div>
				<div className='md:w-1/2 px-3 mb-6'>
					<label className='md:text-xl label'>Jenjang</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							list='jenjang'
							placeholder='pilih jenjang'
							name='jenjang'
							ref={register({required: true})}
						/>
						<datalist id='jenjang'>
							<option value='sd'></option>
							<option value='smp'></option>
						</datalist>
					</div>
				</div>
				<div className='md:w-1/2 px-3'>
					<label className='label md:text-xl'>Yayasan</label>
					<input
						className='input bg-grey-lighter border-grey-lighter'
						type='text'
						placeholder='nama yayasan'
						name='namaYayasan'
						ref={register({required: true})}
					/>
				</div>
			</div>
			<div className='-mx-3 md:flex mb-6'>
				<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					<label className='md:text-xl label'>Uang Pendaftaran</label>
					<NumberFormat
						className='input bg-grey-lighter border-grey-lighter'
						placeholder='uang pendaftaran'
						name='uangPendaftaran'
						value={uang.uangPendaftaran}
						thousandSeparator={true}
						prefix={'Rp.'}
						autoComplete='off'
						onValueChange={values => {
							const {formattedValue} = values;
							setUang({uangPendaftaran: formattedValue});
						}}
					/>
				</div>
				<div className='md:w-1/2 px-3'>
					<label className='md:text-xl label'>Uang SPP Bulanan</label>
					<NumberFormat
						className='input bg-grey-lighter border-grey-lighter'
						placeholder='spp bulanan'
						name='uangSppBulanan'
						value={uang.uangSppBulanan}
						thousandSeparator={true}
						prefix={'Rp.'}
						autoComplete='off'
						onValueChange={values => {
							const {formattedValue} = values;
							setUang({...uang, uangSppBulanan: formattedValue});
						}}
					/>
				</div>
			</div>
			<div className='mb-5'>
				<label className='md:text-xl label'>Deskripsi Sekolah</label>
				<textarea
					className='textarea'
					placeholder='deskripsi sekolah..'
					name='deskripsi'
					ref={register({required: true})}
				></textarea>
			</div>
			<div className='-mx-3 md:flex mb-4'>
				<div className='md:w-full px-3 mb-6 md:mb-0'>
					<label className='md:text-xl label'>Alamat Sekolah</label>
					<textarea
						className='textareaMD bg-grey-lighter border border-grey-lighter'
						type='text'
						placeholder='alamat sekolah..'
						name='alamat'
						ref={register({required: true})}
					></textarea>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Kota / Kabupaten</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							list='kota'
							placeholder='pilih kota/kabupaten'
							name='kota'
							ref={register({required: true})}
						/>
						<datalist id='kota'>
							<option value='medan'></option>
							<option value='jogja'></option>
						</datalist>
					</div>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Google Maps</label>
					<input
						className='input bg-grey-lighter border-grey-lighter'
						type='text'
						placeholder='link google maps.'
						name='gmaps'
						ref={register({required: true})}
					/>
				</div>
			</div>
			<div className='-mx-3 md:flex mb-4'>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Nomor Telepon</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							placeholder='nomor telepon sekolah'
							type='number'
							name='phone'
							ref={register({required: true})}
						/>
					</div>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Email</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							placeholder='email sekolah'
							type='email'
							name='email'
							ref={register({required: true})}
						/>
					</div>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Website</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							placeholder='alamat website sekolah'
							type='text'
							name='website'
							ref={register({required: true})}
						/>
					</div>
				</div>
			</div>
			<div className='-mx-3 md:flex mb-4 text-white'>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Brosur Sekolah</label>
					<div className='relative'>
						{image.brosur === null ? (
							''
						) : (
							<img src={image.brosur} alt='gambar sekolah' />
						)}
						<input
							className='input bg-grey-lighter border-grey-lighter'
							type='file'
							name='brosur'
							onChange={handleImage}
						/>
					</div>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Gambar Sekolah</label>
					<div className='relative'>
						{image.sekolah === null ? (
							''
						) : (
							<img src={image.sekolah} alt='gambar sekolah' />
						)}
						<input
							className='input bg-grey-lighter border-grey-lighter'
							type='file'
							name='sekolah'
							onChange={handleImage}
						/>
					</div>
				</div>
			</div>
			<button type='submit' className='submit-btn font-Nunito'>
				Kirim
			</button>
		</form>
	);
};

export default FormAdd;
