import { LandingPage } from '@/_pages/landing.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/{-$lang}/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <LandingPage />;
}
