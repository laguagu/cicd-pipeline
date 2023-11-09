# Valitse peruskuva (esim. Node.js)
FROM node:20

# Määritä työskentelyhakemisto kuvaan
WORKDIR /app

# Kopioi projektin tiedostot (esim. package.json ja package-lock.json) työskentelyhakemistoon
COPY package*.json ./

# Asenna sovelluksen riippuvuudet
RUN npm install

# Kopioi muut projektin tiedostot työskentelyhakemistoon
COPY . .

RUN npx prisma db push
# Määritä kuinka sovellus käynnistetään (esim. Node.js-sovelluksissa)
EXPOSE 3000  
CMD ["npm", "run", "dev"]