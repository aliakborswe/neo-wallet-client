import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  createdAt: string;
  amount: number;
  type: string;
}

interface TransactionChartProps {
  transactions: Transaction[];
  title?: string;
}

export function TransactionChart({
  transactions,
  title = "Transaction Activity",
}: TransactionChartProps) {
  const chartData = useMemo(() => {
    // Group transactions by date
    const grouped = transactions.reduce((acc, transaction) => {
      const date = new Date(transaction.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      if (!acc[date]) {
        acc[date] = { date, amount: 0, count: 0 };
      }

      acc[date].amount += Math.abs(transaction.amount);
      acc[date].count += 1;

      return acc;
    }, {} as Record<string, { date: string; amount: number; count: number }>);

    // Convert to array and sort by date
    return Object.values(grouped)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-7); // Last 7 days
  }, [transactions]);

  return (
    <Card className='border-border/50 bg-card/50 backdrop-blur'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id='colorAmount' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='hsl(var(--primary))'
                  stopOpacity={0.3}
                />
                <stop
                  offset='95%'
                  stopColor='hsl(var(--primary))'
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray='3 3'
              stroke='hsl(var(--border))'
              opacity={0.3}
            />
            <XAxis
              dataKey='date'
              stroke='hsl(var(--muted-foreground))'
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke='hsl(var(--muted-foreground))'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `৳${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area
              type='monotone'
              dataKey='amount'
              stroke='hsl(var(--primary))'
              strokeWidth={2}
              fillOpacity={1}
              fill='url(#colorAmount)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
