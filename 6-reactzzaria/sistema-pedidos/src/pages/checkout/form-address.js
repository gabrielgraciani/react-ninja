import React, {useState, useEffect} from 'react';

function FormAddress(){
	const [cep, setCep] = useState('');

	useEffect(() => {
		async function fetchAddress(){
			if(cep.length < 9){
				return
			}
			console.log('buscar cep', cep);

			const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`);
			const result = await data.json();
			console.log(result);
		}

		fetchAddress();
	}, [cep]);

	function handleChangeCep(e){
		setCep(cepMask(e.target.value));
	}

	function cepMask(value){
		return value
			.replace(/\D+/g, '')
			.replace(/(\d{5})(\d)/, '$1-$2')
			.replace(/(-\d{3})\d+?$/, '$1');
	}
	return(
		<>
		<div className="conteudo">
			<div className="item">
				<div className="input">
					<label>CEP</label>
					<input type="text" autoFocus value={cep} onChange={handleChangeCep} />
				</div>
				<div className="input maior">
					<label>Rua</label>
					<input type="text" />
				</div>
				<div className="input menor">
					<label>Número</label>
					<input type="text" />
				</div>
				<div className="input">
					<label>Complemento</label>
					<input type="text" />
				</div>
				<div className="input maior">
					<label>Cidade</label>
					<input type="text" />
				</div>
				<div className="input menor">
					<label>Estado</label>
					<input type="text" />
				</div>
			</div>
		</div>
		</>
	)
}

export default FormAddress