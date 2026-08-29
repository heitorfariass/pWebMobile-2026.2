const calcados = [
  { nome: "Tênis Runner", preco: "R$ 199,90" },
  { nome: "Tênis Casual", preco: "R$ 159,90" },
  { nome: "Bota Urbana", preco: "R$ 249,90" },
  { nome: "Sapatênis", preco: "R$ 179,90" },
  { nome: "Chinelo Slide", preco: "R$ 59,90" },
];

export default function Exercicio263() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {calcados.map((calcado) => (
          <div
            key={calcado.nome}
            style={{ backgroundColor: "green", flex: 1, textAlign: "center", padding: "10px" }}
          >
            <img
              src="https://placehold.co/150x150?text=Calçado"
              alt={calcado.nome}
              width={150}
              height={150}
            />
            <p>{calcado.nome}</p>
            <p>{calcado.preco}</p>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "gray", textAlign: "center", padding: "20px" }}>
        <p>Loja de Calçados</p>
      </div>
    </div>
  );
}
