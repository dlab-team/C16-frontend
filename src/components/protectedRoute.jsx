import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/'); // Redirecciona al login si el usuario no está autenticado
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return children;
};

export default ProtectedRoute;
