import { UserDetailPage } from '@pages/user/user-detail.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/{-$lang}/user/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserDetailPage />;
}
