"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { name: "Container 1", cpu: 45, memory: 60 },
  { name: "Container 2", cpu: 34, memory: 40 },
  { name: "Container 3", cpu: 67, memory: 80 },
  { name: "Container 4", cpu: 23, memory: 30 },
  { name: "Container 5", cpu: 56, memory: 70 },
]

export function DockerMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Docker Container Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            cpu: {
              label: "CPU Usage",
              color: "hsl(var(--chart-1))",
            },
            memory: {
              label: "Memory Usage",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[200px]"
        >
          <BarChart data={data}>
            <ChartTooltip />
            <Bar dataKey="cpu" fill="var(--color-cpu)" />
            <Bar dataKey="memory" fill="var(--color-memory)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

