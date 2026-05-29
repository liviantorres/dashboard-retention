import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function IRAMedioChart({ geral, retidos }) {
  const data = [
    { tipo: "Geral", valor: geral },
    { tipo: "Retidos", valor: retidos },
  ];

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <h2 className="text-base font-medium mb-4 text-gray-700">
        Comparação de IRA médio
      </h2>

      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

          <XAxis dataKey="tipo" />
          <YAxis domain={[0, 10]} />

          <Tooltip />

          <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <cell
                key={index}
                fill={entry.tipo === "Retidos" ? "#ef4444" : "#3b82f6"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}