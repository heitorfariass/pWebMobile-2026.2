import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Exercícios de HTML e CSS</h1>
      <ul style={{ marginTop: "20px", lineHeight: "2" }}>
        <li>
          <Link href="/exercicio-210">Exercício da Pg. 210</Link>
        </li>
        <li>
          <Link href="/exercicio-231">Exercício da Pg. 231</Link>
        </li>
        <li>
          <Link href="/exercicio-246">Exercício da Pg. 246</Link>
        </li>
        <li>
          <Link href="/exercicio-263">Exercício da Pg. 263</Link>
        </li>
      </ul>
    </main>
  );
}
