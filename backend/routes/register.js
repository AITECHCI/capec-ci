router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
  
    console.log('Inscription - Username:', username); // Log pour le username
    console.log('Inscription - Email:', email); // Log pour l'email
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const newUser = await pool.query(
        'INSERT INTO Users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
        [username, hashedPassword, email]
      );
      res.status(201).json(newUser.rows[0]);
    } catch (err) {
      console.error('Erreur lors de la création de l’utilisateur:', err.message);
      if (err.code === '23505') { // Code d'erreur pour violation d'unicité
        return res.status(400).json({ message: 'Username ou email déjà utilisé' });
      }
      res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur' });
    }
  });