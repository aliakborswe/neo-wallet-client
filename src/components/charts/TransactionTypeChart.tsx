import { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  type PieLabelRenderProps,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  type: string;
  amount: number;
}

interface TransactionTypeChartProps {
  transactions: Transaction[];
  title?: string;
}



export function TransactionTypeChart({
  transactions,
  title = "Transaction Types",
}: TransactionTypeChartProps) {
  const chartData = useMemo(() => {
    const grouped = transactions.reduce((acc, transaction) => {
      const type = transaction.type.replace(/_/g, " ");

      if (!acc[type]) {
        acc[type] = { name: type, value: 0, count: 0 };
      }

      acc[type].value += Math.abs(transaction.amount);
      acc[type].count += 1;

      return acc;
    }, {} as Record<string, { name: string; value: number; count: number }>);

    return Object.values(grouped);
  }, [transactions]);

  return (
    <Card className='border-border/50 bg-card/50 backdrop-blur'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              labelLine={false}
              label={({ name, percent }: PieLabelRenderProps) => (
                <text
                  fill='#374151'
                  fontSize={12}
                  textAnchor='middle'
                  dominantBaseline='central'
                >
                  {`${name ?? ""} ${(percent ?? 0 * 100)}%`}
                </text>
              )}
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'
            >
              {chartData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill='#059669' />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#b8b6b2",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: number) => `$${value.toFixed(2)}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
