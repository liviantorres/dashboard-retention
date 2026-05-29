import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function IRAvsReprovacoesChart({ data }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <h2 className="text-base font-regular  mb-4 font-lexend">
        Relação entre IRA e Reprovações
      </h2>

      <ResponsiveContainer height={350}>
        <ScatterChart>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

          <XAxis
            type="number"
            dataKey="ira"
            name="IRA"
            tick={{ fontSize: 12 }}
            domain={[0, 10]}
          />

          <YAxis
            type="number"
            dataKey="reprovacoes"
            name="Reprovações"
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          />

          <Scatter
            data={data}
            fill="#010f25a4"
            shape={(props) => {
              const { cx, cy, payload } = props;

              let color = "#3b82f6";

              if (payload.reprovacoes > 10) color = "#ef4444";
              else if (payload.reprovacoes > 5) color = "#f59e0b";

              return <circle cx={cx} cy={cy} r={4} fill={color} />;
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
