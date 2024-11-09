<template>
  <div class="grid grid-cols-3 place-items-center gap-4 min-h-screen p-4">
    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 1 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        message recieved from ws here
      </CardContent>
    </Card>

    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 2 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        message recieved from ws here
      </CardContent>
    </Card>

    <Card class="overflow-auto w-full min-h-40">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Client 3 </CardTitle>
      </CardHeader>
      <CardContent class="grid grid-cols-2 gap-4">
        message recieved from ws here
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
</script>