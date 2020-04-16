import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormAdd from './FormAdd';

const Modal = ({d, click}) => {
	const [state, setState] = useState([]);

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
		let datas = Object.assign(data, image);
		setState(datas);
		// alert('data sekolah telah ditambahkan');
		// window.location.reload();
	};

	console.log(state);

	// modal
	return ReactDOM.createPortal(
		<div className='modal bg-smoke font-Nunito' style={d} onClick={click}>
			<FormAdd
				onSubmit={handleSubmit}
				image={image}
				handleImage={handleImage}
			/>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
