import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-layout/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth-layout/login/"!</div>
}
