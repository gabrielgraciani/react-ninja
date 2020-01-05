import React, {useState} from 'react';

function PhoneField(){
	const [phone, setPhone] = useState('');

	function handleChangePhone(e){
		setPhone(phoneMask(e.target.value));
	}

	function phoneMask(value){
		return value
			.replace(/\D+/g, '')
			.replace(/(\d{2})(\d)/, '($1) $2')
			.replace(/(\d{4})(\d)/, '$1-$2')
			.replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
			.replace(/(-\d{4})\d+?$/, '$1');
	}

	return(
		<div className="conteudo">
			<div className="item">
				<div className="input">
					<label>Telefone</label>
					<input type="text" value={phone} onChange={handleChangePhone} />
				</div>
			</div>
		</div>
	)
}

export default PhoneField