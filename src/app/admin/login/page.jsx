'use client'; // Ajoutez cette ligne en haut du fichier

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simule une connexion réussie
    if (email === 'admin@example.com' && password === 'password') {
      toast.success('Connexion réussie !');
      router.push('/admin/dashboard');
    } else {
      toast.error('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="admin-login">
      <h1>Connexion à l'administration</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}