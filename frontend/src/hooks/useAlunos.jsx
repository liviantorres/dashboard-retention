import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useAlunos(path) {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    if (!path) return;

    fetch(path)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        });

        setAlunos(parsed.data);
      })
      .catch((err) => {
        console.error("Erro ao carregar CSV:", err);
      });
  }, [path]);

  return alunos;
}