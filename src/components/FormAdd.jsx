import React from 'react';

import NumberFormat from 'react-number-format';
import {useForm} from 'react-hook-form';
import {RHFInput} from 'react-hook-form-input';

const FormAdd = ({image, handleImage, onSubmit}) => {
	const {register, unregister, setValue, handleSubmit, errors} = useForm();

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
						ref={register({required: 'masukan nama sekolah'})}
					/>
					<p className='text-red-600 italic'>
						{errors.namaSekolah && errors.namaSekolah.message}
					</p>
				</div>
				<div className='md:w-1/2 px-3 mb-6'>
					<label className='md:text-xl label'>Jenjang</label>
					<div className='relative'>
						<select
							className='input bg-grey-lighter border-grey-lighter'
							name='jenjang'
							ref={register({
								required: 'masukan jenjang sekolah',
								minLength: 1,
							})}
						>
							<option value=''></option>
							<option value='SD'>SD</option>
							<option value='SMP'>SMP</option>
							<option value='SMA'>SMA</option>
						</select>
						<p className='text-red-600 italic'>
							{errors.jenjang && errors.jenjang.message}
						</p>
					</div>
				</div>
				<div className='md:w-1/2 px-3'>
					<label className='label md:text-xl'>Yayasan</label>
					<input
						className='input bg-grey-lighter border-grey-lighter'
						type='text'
						placeholder='nama yayasan'
						name='namaYayasan'
						ref={register({required: 'masukan nama yayasan'})}
					/>
					<p className='text-red-600 italic'>
						{errors.namaYayasan && errors.namaYayasan.message}
					</p>
				</div>
			</div>
			<div className='-mx-3 md:flex mb-6'>
				<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					<label className='md:text-xl label'>Uang Pendaftaran</label>
					<RHFInput
						className='input bg-grey-lighter border-grey-lighter'
						register={register({
							required: 'masukan jumlah uang pendaftaran',
							minLength: {value: 1, message: 'tidak boleh kosong.'},
						})}
						unregister={unregister}
						name='uangPendaftaran'
						prefix='Rp.'
						setValue={setValue}
						thousandSeparator
						as={<NumberFormat />}
					/>
					<p className='text-red-600 italic'>
						{errors.uangPendaftaran && errors.uangPendaftaran.message}
					</p>
				</div>
				<div className='md:w-1/2 px-3'>
					<label className='md:text-xl label'>Uang SPP Bulanan</label>
					<RHFInput
						className='input bg-grey-lighter border-grey-lighter'
						register={register({
							required: 'masukan jumlah uang spp bulanan',
							minLength: {value: 1, message: 'tidak boleh kosong.'},
						})}
						unregister={unregister}
						name='uangSppBulanan'
						prefix='Rp.'
						setValue={setValue}
						thousandSeparator
						as={<NumberFormat />}
					/>
					<p className='text-red-600 italic'>
						{errors.uangSppBulanan && errors.uangSppBulanan.message}
					</p>
				</div>
			</div>
			<div className='mb-5'>
				<label className='md:text-xl label'>Deskripsi Sekolah</label>
				<textarea
					className='textarea'
					placeholder='deskripsi sekolah..'
					name='deskripsi'
					ref={register({required: 'masukan deskripsi sekolah'})}
				></textarea>
				<p className='text-red-600 italic'>
					{errors.deskripsi && errors.deskripsi.message}
				</p>
			</div>
			<div className='-mx-3 md:flex mb-4'>
				<div className='md:w-full px-3 mb-6 md:mb-0'>
					<label className='md:text-xl label'>Alamat Sekolah</label>
					<textarea
						className='textareaMD bg-grey-lighter border border-grey-lighter'
						type='text'
						placeholder='alamat sekolah..'
						name='alamat'
						ref={register({required: 'masukan alamat sekolah'})}
					></textarea>
					<p className='text-red-600 italic'>
						{errors.alamat && errors.alamat.message}
					</p>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Kota / Kabupaten</label>
					<div className='relative'>
						<select
							className='input bg-grey-lighter border-grey-lighter'
							name='kota'
							ref={register({
								required: 'masukan kota / kabupaten',
								minLength: 1,
							})}
						>
							<option value=''></option>
							<option value='medan'>MEDAN</option>
							<option value='jogja'>JOGJA</option>
							<option value='bantul'>BANTUL</option>
						</select>
						<p className='text-red-600 italic'>
							{errors.kota && errors.kota.message}
						</p>
					</div>
				</div>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Google Maps</label>
					<input
						className='input bg-grey-lighter border-grey-lighter'
						type='text'
						placeholder='link google maps.'
						name='gmaps'
						ref={register({required: 'masukan alamat url / link google map'})}
					/>
					<p className='text-red-600 italic'>
						{errors.gmaps && errors.gmaps.message}
					</p>
				</div>
			</div>
			<div className='-mx-3 md:flex mb-4'>
				<div className='md:w-1/2 px-3 mb-4'>
					<label className='md:text-xl label'>Nomor Telepon</label>
					<div className='relative'>
						<input
							className='input bg-grey-lighter border-grey-lighter'
							placeholder='nomor telepon'
							type='number'
							name='phone'
							ref={register({
								required: 'masukan nomor telepon sekolah',
								minLength: {
									value: 11,
									message: 'nomor telepon minimal 11 angka',
								},
							})}
						/>
						<p className='text-red-600 italic'>
							{errors.phone && errors.phone.message}
						</p>
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
							ref={register({required: 'masukan email sekolah'})}
						/>
						<p className='text-red-600 italic'>
							{errors.email && errors.email.message}
						</p>
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
							ref={register({required: 'masukan website sekolah'})}
						/>
						<p className='text-red-600 italic'>
							{errors.website && errors.website.message}
						</p>
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
							<img
								src={image.brosur}
								alt='gambar sekolah'
								height='350px'
								width='350px'
							/>
						)}
						<input
							className='inputFile appearance-none block py-3 px-4 w-full bg-grey-lighter'
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
							<img
								src={image.sekolah}
								alt='gambar sekolah'
								height='350px'
								width='350px'
							/>
						)}
						<input
							className='inputFile appearance-none block py-3 px-4 w-full bg-grey-lighter'
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
