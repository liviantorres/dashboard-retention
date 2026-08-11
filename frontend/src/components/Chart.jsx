import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Fev", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Abr", value: 50 },
];

export default function Chart() {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <h2 className="font-poppins mb-4">Retenção Mensal</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}