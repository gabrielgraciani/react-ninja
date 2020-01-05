import React from 'react';

function FormAddress(){
	return(
		<>
		<div className="conteudo">
			<div className="item">
				<div className="input">
					<label>CEP</label>
					<input type="text" autoFocus />
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