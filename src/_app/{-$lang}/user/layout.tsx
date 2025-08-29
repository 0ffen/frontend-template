import { UserLayout } from '@pages/user/user.layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/{-$lang}/user')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserLayout />;
}
