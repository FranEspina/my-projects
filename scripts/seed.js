const { list_lenguages } = require('../src/app/mocks/languages.js')
const { db } = require('@vercel/postgres');
const { v4: uuidv4 } = require('uuid');

async function seedLanguages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "unaccent"`;

    await client.sql`DROP TABLE IF EXISTS languages`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS languages (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        experience_type VARCHAR(255) NOT NULL,
        experience_level VARCHAR(255) NOT NULL,
        experience_years SMALLINT NOT NULL, 
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "languages" table`);

    // Insert data into the "languages" table
    const insertedLanguages = await Promise.all(
      list_lenguages.map(
        (lang) => client.sql`
        INSERT INTO languages (id, name, experience_type, experience_level, experience_years, image_url)
        VALUES (${uuidv4()}, ${lang.nombre}, ${lang.experiencia}, ${lang.nivel}, ${lang.años}, ${lang.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedLanguages.length} languages`);

    return {
      createTable,
      languages: insertedLanguages,
    };
  } catch (error) {
    console.error('Error seeding languages:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedLanguages(client);
  console.log('conectado')
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
