import React from "react";
import Menu from "../components/Sidebar";
import Layout from "../components/Layout";
import Card from "../components/Card";
import {TriangleAlert, Users, GraduationCap} from "lucide-react";
import Chart from "../components/Chart";

export default function Dashboard(){

    return(
        <div>
            <Layout> 
            <h1 className="font-lexend font-light text-4xl pl-5 pt-5">Dashboard</h1>
            <p className="font-lexend font-extralight pl-6 pb-8">Visão geral da retenção acadêmica</p>
            <div className="flex gap-10 justify-between pl-10 pr-10 pb-6">
                <Card
                title="Total de alunos"
                value="565"
                percentage=""
                icon={<Users size={28} />}
                variant="info"
                />

                <Card
                title="Qtd. de Retidos"
                value="250"
                percentage="44,25%"
                icon={<TriangleAlert size={28} />}
                variant="warning"
                />

                <Card
                title="Média do IRA (Geral)"
                value="6.21"
                percentage=""
                icon={<GraduationCap size={28} />}
                variant="success"
                />

                <Card
                title="Média do IRA (Retidos)"
                value="5.42"
                percentage=""
                icon={<GraduationCap size={28} />}
                variant="danger"
                />

            </div>

            <div className="flex gap-10 justify-start pl-10 pr-10 pb-6">
                <Card
                title="Taxa de Retenção"
                value="25%"
                percentage="44,25%"
                icon={<TriangleAlert size={28} />}
                variant="info"
                />

                <Card
                title="Taxa de Retenção"
                value="10%"
                percentage="(Por Tempo)"
                icon={<TriangleAlert size={28} />}
                variant="info"
                />

                <Card
                title="Taxa de Retenção"
                value="15%"
                percentage="(Por Desempenho)"
                icon={<TriangleAlert size={28} />}
                variant="info"
                />

            </div>

            <Chart/>
            <Chart/>
            </Layout>
        </div>
    );
}