export async function jsonBodyHandle(req, res) {
	const buffers = [];
	for await (const chunk of req) {
		buffers.push(chunk);
	}
	try {
		//Concatena os chunks recebidos e converte para string, depois faz o parse para JSON.
		req.body = JSON.parse(Buffer.concat(buffers).toString());
	} catch (err) {
		req.body = null;
	}
	//Define o header de resposta como JSON para que o cliente saiba que a resposta será em formato JSON.
	res.setHeader("Content-Type", "application/json");
	return res;
}
