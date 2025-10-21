import { useMemo } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  createdAt: string;
  amount: number;
  type: string;
}

interface BalanceChartProps {
  transactions: Transaction[];
  currentBalance: number;
  title?: string;
}

export function BalanceChart({
  transactions,
  currentBalance,
  title = "Balance History",
}: BalanceChartProps) {
  const chartData = useMemo(() => {
    // Sort transactions by date
    const sorted = [...transactions].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    let balance = currentBalance;

    // Calculate balance at each point (working backwards)
    const balanceHistory = sorted.reverse().map((transaction) => {
      const date = new Date(transaction.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      const currentPoint = balance;

      // Reverse the transaction to get previous balance
      if (
        transaction.type === "SEND_MONEY" ||
        transaction.type === "WITHDRAW" ||
        transaction.type === "CASH_OUT"
      ) {
        balance += Math.abs(transaction.amount);
      } else {
        balance -= Math.abs(transaction.amount);
      }

      return {
        date,
        balance: currentPoint,
      };
    });

    return balanceHistory.reverse().slice(-10); // Last 10 data points
  }, [transactions, currentBalance]);

  return (
    <Card className='border-border/50 bg-card/50 backdrop-blur'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={chartData}>
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
              formatter={(value: number) => [`৳${value.toFixed(2)}`, "Balance"]}
            />
            <Line
              type='monotone'
              dataKey='balance'
              stroke='hsl(var(--chart-2))'
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
