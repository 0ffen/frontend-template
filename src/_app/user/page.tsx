import { UserPage } from '@pages/user/user.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/user/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserPage />;
}
