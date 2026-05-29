import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid,
} from "recharts";

export default function RetentionByCourseChart({ data }) {
  const sortedData = [...data].sort((a, b) => b.retidos - a.retidos);

  const max = Math.max(...sortedData.map((d) => d.retidos));

  const getColor = (value) => {
  const intensity = value / max;
  return `rgba(249, 115, 22, ${0.3 + intensity * 0.7})`;
};
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 ">
      <h2 className="text-lg font-regular  mb-4 font-lexend">Retenção por Curso</h2>

      <ResponsiveContainer height={350}>
        <BarChart
          layout="vertical"
          data={sortedData}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid
            stroke="#e5e7eb"
            strokeDasharray="3 3"
            horizontal={false}
          />
          <XAxis
            type="number"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            dataKey="curso"
            type="category"
            tick={{ fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            width={120}
          />

          <Tooltip
            cursor={{ fill: "#f3f4f6" }}
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              fontSize: "13px",
            }}
          />

          <Bar dataKey="retidos" radius={[0, 10, 10, 0]}>
            {sortedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColor(entry.retidos)}
              />
            ))}

            <LabelList
              dataKey="retidos"
              position="right"
              style={{ fontSize: 12, fill: "#374151" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
