import { useState } from "react";
import { Home, Settings, LayoutDashboard, Users, BookOpen, FileChartColumnIncreasing, ChartColumnDecreasing, Download } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const user = { name: "Livian" };

  const menuItems = [
    { label: "Dashboard", link: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Alunos", link: "/alunos", icon: <Users size={18} /> },
    { label: "Disciplinas", link: "/disciplinas", icon: <BookOpen size={18} /> },
    { label: "Relatórios", link: "/relatorios", icon: <FileChartColumnIncreasing size={18} /> },
    { label: "Análises", link: "/analises", icon: <ChartColumnDecreasing size={18} /> },
    { label: "Importação de Dados", link: "/importacao-de-dados", icon: <Download size={18} /> },
  ];

  return (
    <div className="flex">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        items={menuItems}
        user={user}
      />

      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}