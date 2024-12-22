"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Server, AlertTriangle } from 'lucide-react'

const metrics = [
  {
    title: "Protected Systems",
    value: "156",
    change: "+12",
    icon: Shield,
  },
  {
    title: "Active Services",
    value: "89",
    change: "+4",
    icon: Server,
  },
  {
    title: "Security Alerts",
    value: "23",
    change: "-5",
    icon: AlertTriangle,
  },
]

export function SecurityMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {metric.change} from last week
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

