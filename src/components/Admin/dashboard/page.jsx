'use client';  // Nécessaire pour utiliser des hooks dans les pages Next.js

import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

export default function AdminDashboardPage() {
  const { user } = useAuth();

  // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
  if (!user || user.role !== 'admin') {
    redirect('/admin/login');
  }

  return (
    <div className="admin-dashboard">
      <h1>Tableau de bord de l'administration</h1>
      <p>Bienvenue, {user.email} !</p>
      {/* Ajoutez ici les composants du tableau de bord */}
    </div>
  );
}