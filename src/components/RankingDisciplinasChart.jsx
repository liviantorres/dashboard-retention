import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Cell,
} from "recharts";

export default function RankingDisciplinasChart({ data, course }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 ">
      <h2 className="text-base font-regular  mb-4 font-lexend">
        Ranking de Disciplinas por Reprovações - {course}
      </h2>

      <ResponsiveContainer height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid
            stroke="#e5e7eb"
            strokeDasharray="3 3"
            horizontal={false}
          />

          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            dataKey="disciplina"
            type="category"
            tick={{ fontSize: 12, fill: "#374151" }}
            width={140}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#6b7280" }}
            itemStyle={{ color: "#111827" }}
          />

          <Bar dataKey="total" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? "#1e40af" : "#60a5fa"}
              />
            ))}

            <LabelList
              dataKey="total"
              position="right"
              style={{ fontSize: 12, fill: "#374151" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
