import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { TriangleAlert, Book } from "lucide-react";
import RankingDisciplinasChart from "../components/RankingDisciplinasChart";
import IRAvsReprovacoesChart from "../components/IRAvsReprovacoesChart";
import { Table } from "../components/Table";
import {
  getRankingDisciplinas,
  getTaxaReprovacao,
  getTotalDisciplinas,
  getRelacaoIRAReprovacoes,
  getMediaIRA,
  isRetido
} from "../services/dashboardServices";
import useAlunos from "../hooks/useAlunos";
import IRAMedioChart from "../components/IRAMedioChart";

export default function Disciplines() {
  const alunosSI = useAlunos("/data/alunos-si.csv");
  const alunosCC = useAlunos("/data/alunos-cc.csv");

  const alunosEC = useAlunos("/data/alunos-ec.csv");
  const alunosEM = useAlunos("/data/alunos-em.csv");
  const alunosEA = useAlunos("/data/alunos-ea.csv");

  const loading =
    !alunosSI.length ||
    !alunosCC.length ||
    !alunosEC.length ||
    !alunosEM.length ||
    !alunosEA.length;

  const alunosTI = [...alunosSI, ...alunosCC];
  const alunosEngenharia = [...alunosEC, ...alunosEM, ...alunosEA];

  const alunosGeral = [...alunosTI, ...alunosEngenharia];
  const dataTI = getRankingDisciplinas(alunosTI, 10);
  const dataEngenharia = getRankingDisciplinas(alunosEngenharia, 10);
  const dataGeral = getRankingDisciplinas(alunosGeral, 10);
  const todasDisciplinas = getRankingDisciplinas(alunosGeral);

  const disciplinasCriticas = todasDisciplinas.filter(
    (d) => d.total > 30,
  ).length;

  const taxaReprovacao = getTaxaReprovacao(alunosGeral);
  const totalDisciplinas = getTotalDisciplinas(alunosGeral);

  const dataIRA = alunosGeral?.length
    ? getRelacaoIRAReprovacoes(alunosGeral)
    : [];

  const mediaIRA = getMediaIRA(alunosGeral);
  const mediaIRARetidos = getMediaIRA(alunosGeral, isRetido);

  if (loading) {
    return (
      <Layout>
        <div className="p-10 text-gray-500">Carregando dados...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="font-lexend font-light text-4xl pl-5 pt-5">Disciplinas</h1>

      <p className="font-lexend font-extralight pl-6 pb-8">
        Análise de desempenho por disciplina
      </p>
      <div className="gap-10 pl-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-10 pb-6">
          <Card
            title="Total de disciplinas"
            value={totalDisciplinas}
            icon={<Book />}
            variant="success"
          />
          <Card
            title="Disciplinas críticas"
            value={disciplinasCriticas}
            icon={<TriangleAlert size={28} />}
            variant="warning"
            percentage="Número de reprovações > 30"
          />
          <Card
            title="Taxa de Reprovação"
            value={`${taxaReprovacao.toFixed(2)}%`}
            percentage=""
            icon={<TriangleAlert size={28} />}
            variant="info"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 pr-10 pb-6 pl-10">
        <RankingDisciplinasChart data={dataGeral} course="Geral" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-10 pb-6 pl-10">
        <RankingDisciplinasChart data={dataTI} course="TI" />
        <RankingDisciplinasChart data={dataEngenharia} course="Engenharias" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-10 pb-6 pl-10">
        <IRAvsReprovacoesChart data={dataIRA} />
        <IRAMedioChart geral={mediaIRA} retidos={mediaIRARetidos} />
      </div>

      <h2 className="text-base font-regular  mb-4 font-lexend">
        Detalhamento por Disciplina
      </h2>
      <Table />
    </Layout>
  );
}
