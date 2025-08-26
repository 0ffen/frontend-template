import { Outlet } from '@tanstack/react-router';

export function UserLayout() {
  return (
    <div className='bg-blue-500 p-2'>
      <h1 className='text-white'>User Layout</h1>
      <Outlet />
    </div>
  );
}
