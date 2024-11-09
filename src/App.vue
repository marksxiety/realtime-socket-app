<template>
  <div class="grid grid-cols-3 place-items-center gap-4 min-h-screen p-24">
    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 1 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        <p>{{ client1Message }}</p>
      </CardContent>
    </Card>

    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 2 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        <p>{{ client2Message }}</p>
      </CardContent>
    </Card>

    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 3 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        <p>{{ client3Message }}</p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { io } from 'socket.io-client'

const client1Message = ref('0')
const client2Message = ref('0')
const client3Message = ref('0')

let socket: any
onMounted(() => {

  socket = io('http://localhost:8080')

  socket.on('client1', (message: string) => {
    console.log(`Received message from client1: ${message}`)
    client1Message.value = message
  })

  socket.on('client2', (message: string) => {
    console.log(`Received message from client2: ${message}`)
    client2Message.value = message
  })

  socket.on('client3', (message: string) => {
    console.log(`Received message from client3: ${message}`)
    client3Message.value = message
  })

})

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect()
  }
})
</script>
