"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { time: "00:00", attacks: 23 },
  { time: "04:00", attacks: 45 },
  { time: "08:00", attacks: 67 },
  { time: "12:00", attacks: 89 },
  { time: "16:00", attacks: 34 },
  { time: "20:00", attacks: 56 },
]

export function HoneypotMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Honeypot Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attacks: {
              label: "Attack Attempts",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[200px]"
        >
          <LineChart data={data}>
            <ChartTooltip />
            <Line
              type="monotone"
              dataKey="attacks"
              stroke="var(--color-attacks)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

