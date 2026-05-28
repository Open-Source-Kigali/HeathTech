import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { StatCard } from "@/types/dashboard";
import { cn } from "@/lib/utils";

export function StatCardComponent({ title, value, description, trend, trendValue }: StatCard) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          {title}
        </CardTitle>
        <span
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trend === "up" && "text-green-600",
            trend === "down" && "text-red-500",
            trend === "neutral" && "text-slate-400"
          )}
        >
          {trend === "up" && <TrendingUp size={14} />}
          {trend === "down" && <TrendingDown size={14} />}
          {trend === "neutral" && <Minus size={14} />}
          {trendValue}
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
        <p className="text-xs text-slate-400 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}