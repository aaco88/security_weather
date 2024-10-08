// const axios = require('axios');
import axios from 'axios';

const updateGitHubSecret = async () => {
    const newApiKey = generateNewApiKey(); // Simula la creación de una nueva clave
    
    const secretName = 'WEATHER_API_KEY';  // Nombre del Secret en GitHub
    const githubRepo = 'tu-usuario/tu-repositorio'; // Reemplaza con tu repo
    const githubToken = process.env.GITHUB_TOKEN; // Token personal de GitHub con permisos de repo

    const apiUrl = `https://api.github.com/repos/${githubRepo}/actions/secrets/${secretName}`;

    // Encriptación de la nueva clave
    const publicKey = await getGitHubPublicKey(githubRepo, githubToken);
    const encryptedKey = encryptSecret(newApiKey, publicKey); 

    const headers = {
        Authorization: `token ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
    };

    const data = {
        encrypted_value: encryptedKey,
        key_id: publicKey.key_id,
    };

    // Actualiza el Secret en GitHub
    await axios.put(apiUrl, data, { headers });
    console.log(`Secret ${secretName} actualizado exitosamente.`);
};

// Función para generar una nueva clave (simulada)
const generateNewApiKey = () => {
    return Math.random().toString(36).substring(2, 15);  // Ejemplo de clave aleatoria
};

// Simulación de la función para obtener la clave pública de GitHub
const getGitHubPublicKey = async (repo, token) => {
    const response = await axios.get(`https://api.github.com/repos/${repo}/actions/secrets/public-key`, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
        },
    });
    return response.data;
};

// Simulación de encriptación del Secret
const encryptSecret = (secret, publicKey) => {
    // Simulación de un proceso de encriptación usando la clave pública
    // En la realidad se utilizaría alguna librería de criptografía
    return Buffer.from(secret).toString('base64'); // Solo para simular
};

updateGitHubSecret().catch(err => console.error('Error actualizando el Secret:', err));
