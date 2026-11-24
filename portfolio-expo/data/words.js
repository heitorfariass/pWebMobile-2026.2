// Lista de palavras do Jogo da Forca — 44 palavras (mínimo exigido: 30)
// Regra: sem acentos, sem espaços, apenas letras de A a Z.

const WORDS = [
  "REACT",
  "ALGORITMO",
  "FIREWALL",
  "CRIPTOGRAFIA",
  "BANCODEDADOS",
  "JAVASCRIPT",
  "COMPUTADOR",
  "INTERNET",
  "SERVIDOR",
  "SOFTWARE",
  "HARDWARE",
  "PROGRAMA",
  "VARIAVEL",
  "FUNCAO",
  "ARRAY",
  "OBJETO",
  "CLASSE",
  "HERANCA",
  "POLIMORFISMO",
  "RECURSIVIDADE",
  "COMPILADOR",
  "DEBUGGING",
  "FRAMEWORK",
  "COMPONENTE",
  "NAVEGADOR",
  "REDE",
  "PROTOCOL",
  "MALWARE",
  "PHISHING",
  "BACKUP",
  "ALGORITMOS",
  "BINARIO",
  "PROCESSADOR",
  "MEMORIA",
  "TECLADO",
  "MONITOR",
  "VERSIONAMENTO",
  "DEPLOY",
  "NUVEM",
  "TOKEN",
  "SENHA",
  "ARVORE",
  "GRAFO",
  "PILHA",
];

export default WORDS;

/** Sorteia uma palavra aleatória da lista, evitando repetir a anterior. */
export function randomWord(exclude) {
  let word = WORDS[Math.floor(Math.random() * WORDS.length)];
  while (exclude && word === exclude) {
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
  }
  return word;
}
