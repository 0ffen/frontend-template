import { UserPage } from '@/_pages/user/user.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/{-$lang}/user/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserPage />;
}
