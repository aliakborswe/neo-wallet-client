import { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
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

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

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
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: number) => `৳${value.toFixed(2)}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
