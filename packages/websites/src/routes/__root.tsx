import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import SideMenu from '../shared/side-menu';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="x layout-flex-sa">
        <SideMenu items={[
          { children: 'Home', to: '/' },
          { children: 'About', to: '/about' }
        ]}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  )
});
