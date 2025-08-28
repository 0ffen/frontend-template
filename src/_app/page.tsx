import { fetcher } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: () => fetcher({ url: 'https://jsonplaceholder.typicode.com/posts/1' }),
  });

  return <pre>{isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</pre>;
}
