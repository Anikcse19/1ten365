import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RequireAuth = (WrappedComponent) => {


  const ComponentWithAuth = (props) => {
    const router = useRouter();

    const ls=typeof window !='undefined'? window.localStorage :null
    const token=ls?.getItem('token')
    // Simulate authentication check
    const isAuthenticated = token // Replace with your authentication logic

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/Auth/Login'); // Redirect to login page if not authenticated
      }
    }, [isAuthenticated, router]);

    // Render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default RequireAuth;
