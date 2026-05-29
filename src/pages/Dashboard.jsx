import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { TriangleAlert, Users, GraduationCap } from "lucide-react";
import RetentionByCourseChart from "../components/RetentionByCourseChart";
import RetentionCountChart from "../components/RetentionCountChart";
import useAlunos from "../hooks/useAlunos";

import {
  getRetencaoPorCurso,
  getEvolucaoRetencao,
  getRetidosPorAno,
  isRetido,
  getTaxaRetencaoTempo,
  getTaxaRetencaoDesempenho,
  getTaxaReprovacao,
} from "../services/dashboardServices";

export default function Dashboard() {
  const alunosSI = useAlunos("/data/alunos-si.csv");
  const alunosCC = useAlunos("/data/alunos-cc.csv");
  const alunosEC = useAlunos("/data/alunos-ec.csv");
  const alunosEM = useAlunos("/data/alunos-em.csv");
  const alunosEA = useAlunos("/data/alunos-ea.csv");

  const alunos = [
    ...alunosSI,
    ...alunosCC,
    ...alunosEC,
    ...alunosEM,
    ...alunosEA,
  ];

  const loading =
    !alunosSI.length ||
    !alunosCC.length ||
    !alunosEC.length ||
    !alunosEM.length ||
    !alunosEA.length;

  const totalAlunos = alunos.length;

  const retidos = alunos.filter(isRetido);
  const totalRetidos = retidos.length;

  const taxaRetencao =
    totalAlunos > 0 ? ((totalRetidos / totalAlunos) * 100).toFixed(2) : "0.00";

  const mediaIRA =
    totalAlunos > 0
      ? (
          alunos.reduce((acc, a) => acc + (Number(a.ira) || 0), 0) / totalAlunos
        ).toFixed(2)
      : "0.00";

  const mediaIRARetidos =
    totalRetidos > 0
      ? (
          retidos.reduce((acc, a) => acc + (Number(a.ira) || 0), 0) /
          totalRetidos
        ).toFixed(2)
      : "0.00";

  const taxaTempo = alunos?.length ? getTaxaRetencaoTempo(alunos) : 0;

  const taxaDesempenho = alunos?.length ? getTaxaRetencaoDesempenho(alunos) : 0;

  const taxaReprovacao = alunos?.length ? getTaxaReprovacao(alunos) : 0;

  const dataCurso = getRetencaoPorCurso(alunos);
  const dataEvolutionCourse = getEvolucaoRetencao(alunos);
  const dataCountCourse = getRetidosPorAno(alunos);

  if (loading) {
    return (
      <Layout>
        <div className="p-10 text-gray-500">Carregando dados...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="font-lexend font-light text-4xl pl-5 pt-5">Dashboard</h1>

      <p className="font-lexend font-extralight pl-6 pb-8">
        Visão geral da retenção acadêmica
      </p>


      <div className="pl-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pr-10 pb-6">
          <Card
            title="Total de alunos"
            value={totalAlunos}
            icon={<Users size={28} />}
            variant="info"
          />

          <Card
            title="Qtd. de Retidos"
            value={totalRetidos}
            percentage={`${taxaRetencao}%`}
            icon={<TriangleAlert size={28} />}
            variant="warning"
          />

          <Card
            title="Média do IRA (Geral)"
            value={mediaIRA}
            icon={<GraduationCap size={28} />}
            variant="success"
          />

          <Card
            title="Média do IRA (Retidos)"
            value={mediaIRARetidos}
            icon={<GraduationCap size={28} />}
            variant="danger"
          />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 pr-10 pb-6">
          <Card
            title="Taxa de Retenção"
            value={`${taxaRetencao}%`}
            icon={<TriangleAlert size={28} />}
            variant="info"
          />

          <Card
            title="Taxa de Retenção"
            value={`${taxaTempo.toFixed(2)}%`}
            icon={<TriangleAlert size={28} />}
            percentage="(por tempo)"
            variant="info"
          />
          <Card
            title="Taxa de Retenção"
            value={`${taxaDesempenho.toFixed(2)}%`}
            icon={<TriangleAlert size={28} />}
            percentage="(por desempenho)"
            variant="info"
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-10">
          <RetentionByCourseChart data={dataCurso} />
          <RetentionCountChart data={dataCountCourse} />
        </div>
      </div>
    </Layout>
  );
}
