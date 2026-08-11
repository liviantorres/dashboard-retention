import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RetentionCountChart({ data }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <h2 className="text-lg font-regular mb-4 font-lexend">
        Quantidade de Retidos por Ano de Ingresso
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="ano"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
            }}
          />

          <Bar
            dataKey="retidos"
            fill="#f97316"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}