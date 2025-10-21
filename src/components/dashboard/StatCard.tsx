import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  variant?: "default" | "primary" | "success" | "warning";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  isLoading,
  variant = "default",
  trend,
}: StatCardProps) {
  const variantStyles = {
    default: "border-border",
    primary: "border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10",
    success: "border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5",
    warning: "border-chart-3/20 bg-gradient-to-br from-chart-3/10 to-chart-3/5",
  };

  return (
    <Card className={variantStyles[variant]}>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon && <div className='text-muted-foreground'>{icon}</div>}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className='text-2xl font-bold'>{value}</div>
            {subtitle && (
              <p className='text-xs text-muted-foreground'>{subtitle}</p>
            )}
            {trend && (
              <div
                className={`text-xs mt-2 ${
                  trend.isPositive ? "text-primary" : "text-destructive"
                }`}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from
                last month
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
