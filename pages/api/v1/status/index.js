function status(request, response) {
  response.status(200).json({ chave: "Não sou aluno do curso.dev :(" });
}

export default status;
