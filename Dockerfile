# Valitse peruskuva (esim. Node.js)
FROM node:20

# Määritä työskentelyhakemisto kuvaan
WORKDIR /app

# Kopioi projektin riippuvuustiedostot (esim. package.json ja package-lock.json) työskentelyhakemistoon
COPY package*.json ./

# Asenna sovelluksen riippuvuudet
RUN npm install

# Kopioi Prisma-kansio ja schema.prisma tiedosto (tai koko projektin tiedostot, jos tarpeen)
COPY prisma ./prisma

# Kopioi muut projektin tiedostot työskentelyhakemistoon
COPY . .

# Generoi Prisma-client
RUN npx prisma generate

# Määritä kuinka sovellus käynnistetään (esim. Node.js-sovelluksissa)
EXPOSE 3000  
CMD ["npm", "run", "dev"]