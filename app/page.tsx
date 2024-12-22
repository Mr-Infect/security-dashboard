import { DashboardShell } from "@/components/dashboard-shell"
import { AIChat } from "@/components/ai-chat"
import { SystemMetrics } from "@/components/system-metrics"
import { SecurityMetrics } from "@/components/security-metrics"
import { ConnectedDevices } from "@/components/connected-devices"
import { DockerMetrics } from "@/components/docker-metrics"
import { HoneypotMetrics } from "@/components/honeypot-metrics"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-9 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <SecurityMetrics />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DockerMetrics />
            <HoneypotMetrics />
          </div>
          <SystemMetrics />
          <ConnectedDevices />
        </div>
        <div className="col-span-3">
          <AIChat />
        </div>
      </div>
    </DashboardShell>
  )
}

