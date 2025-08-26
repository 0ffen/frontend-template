import { Outlet } from '@tanstack/react-router';

export function UserDetailPage() {
  return (
    <div className='bg-green-500 p-2'>
      Hello /user/$id!
      <Outlet />
    </div>
  );
}
