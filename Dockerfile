# Valitse peruskuva (esim. Node.js)
FROM node:latest

# Määritä työskentelyhakemisto kuvaan
WORKDIR /app

# Kopioi projektin tiedostot (esim. package.json ja package-lock.json) työskentelyhakemistoon
COPY package*.json ./

# Asenna sovelluksen riippuvuudet
RUN npm install

# Kopioi muut projektin tiedostot työskentelyhakemistoon
COPY . .

# Määritä kuinka sovellus käynnistetään (esim. Node.js-sovelluksissa)
EXPOSE 8000
CMD ["node", "server.js"]