"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const devices = [
  {
    name: "SOC Workstation 1",
    ip: "192.168.1.100",
    status: "Online",
    lastSeen: "Just now",
    type: "Workstation",
  },
  {
    name: "Security Gateway",
    ip: "192.168.1.1",
    status: "Online",
    lastSeen: "Just now",
    type: "Gateway",
  },
  {
    name: "Monitoring Server",
    ip: "192.168.1.50",
    status: "Online",
    lastSeen: "2 mins ago",
    type: "Server",
  },
  {
    name: "Backup Server",
    ip: "192.168.1.51",
    status: "Offline",
    lastSeen: "5 mins ago",
    type: "Server",
  },
]

export function ConnectedDevices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Devices</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Seen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.ip}>
                <TableCell className="font-medium">{device.name}</TableCell>
                <TableCell>{device.ip}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>
                  <Badge 
                    variant={device.status === "Online" ? "default" : "destructive"}
                  >
                    {device.status}
                  </Badge>
                </TableCell>
                <TableCell>{device.lastSeen}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

