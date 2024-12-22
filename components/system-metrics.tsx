"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SystemMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">CPU Usage</span>
            <span className="text-sm text-muted-foreground">45%</span>
          </div>
          <Progress value={45} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Memory Usage</span>
            <span className="text-sm text-muted-foreground">60%</span>
          </div>
          <Progress value={60} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Disk Usage</span>
            <span className="text-sm text-muted-foreground">75%</span>
          </div>
          <Progress value={75} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Network I/O</span>
            <span className="text-sm text-muted-foreground">30%</span>
          </div>
          <Progress value={30} />
        </div>
      </CardContent>
    </Card>
  )
}

