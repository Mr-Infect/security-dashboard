"use client"

import { useState } from "react"
import { Bot, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI administrator. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")
    
    // Here you would typically make an API call to your AI service
    // For demo purposes, we'll just echo back
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I received your message: " + input },
      ])
    }, 1000)
  }

  return (
    <Card className="h-[calc(100vh-2rem)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          AI Administrator
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-[calc(100%-5rem)] flex-col gap-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="flex flex-col gap-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.role === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button size="icon" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

