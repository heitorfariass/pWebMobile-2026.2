import Image from "next/image";

type DadoProps = {
  valor: number | null;
};

export default function Dado({ valor }: DadoProps) {
  if (valor === null) {
    return (
      <div className="dado dado-vazio">
        <span>?</span>
      </div>
    );
  }

  return (
    <div className="dado">
      <Image
        src={`/dados/${valor}.svg`}
        alt={`Dado com valor ${valor}`}
        width={80}
        height={80}
      />
    </div>
  );
}
