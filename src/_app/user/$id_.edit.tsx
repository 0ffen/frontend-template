import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/user/$id_/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /user/$id/edit!</div>;
}
