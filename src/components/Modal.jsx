import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormAdd from './FormAdd';

const Modal = ({d, click}) => {
	// controlled input
	const [state, setState] = useState([]);

	// controlled input by react-number-format
	const [uang, setUang] = useState({
		uangPendaftaran: '',
		uangSppBulanan: '',
	});

	// preview image on upload
	const [image, setImage] = useState({
		brosur: null,
		sekolah: null,
	});

	// handle image preview
	const handleImage = e => {
		setImage({
			...image,
			[e.target.name]: URL.createObjectURL(e.target.files[0]),
		});
	};

	// handle form
	const handleSubmit = data => {
		let datas = Object.assign(data, uang, image);
		setState(datas);
		alert('data sekolah telah ditambahkan');
		window.location.reload();
	};
	console.log(state);

	// modal
	return ReactDOM.createPortal(
		<div className='modal bg-smoke font-Nunito' style={d} onClick={click}>
			<FormAdd
				onSubmit={handleSubmit}
				uang={uang}
				setUang={setUang}
				image={image}
				handleImage={handleImage}
			/>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
