import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();

  useEffect(() => {
    // Redirige vers la page d'accueil après 3 secondes
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <h1>Erreur de chargement</h1>
      <p>Vous serez redirigé vers la page d'accueil dans quelques secondes...</p>
    </div>
  );
}