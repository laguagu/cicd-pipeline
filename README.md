# NextJS Todo -sovellus

## Kuvaus

Tämä repositorio sisältää NextJS-pohjaisen Todo-sovelluksen, joka on varustettu CI/CD-pipelineilla käyttäen GitHub Actionsia ja Dockeria. Sovellus on paketoitu Docker-imageksi ja julkaistaan AWS EC2-instanssiin.

## Teknologiat

- NextJS
- TypeScript
- GitHub Actions
- Docker/Docker Hub
- AWS EC2
- Nginx (porttiohjaus)


## Asennus ja käyttöönotto

1. **Kloonaa repositorio:**
   ```
  git clone https://github.com/laguagu/nextJS-todo.git
  ```
2. **Asenna riippuvuudet:**
  ```
  npm install
  npm run dev
   ```
## CI/CD Pipeline

### Continuous Integration (CI)

CI-pipeline (`ci.yml`) on asetettu reagoimaan `main`-haaran push-toimintoihin. CI-pipeline suorittaa seuraavat tehtävät:

- Rakentaa Docker-imagen sovelluksesta.
- Työntää imagen Docker Hubiin.

### Continuous Deployment (CD)

CD-pipeline (`cd.yml`) käynnistyy, kun CI-pipeline on valmis. Se suorittaa seuraavat tehtävät:

- Hakee Docker-imagen Docker Hubista.
- Poistaa vanhan Docker-kontin, jos sellainen on olemassa.
- Käynnistää uuden Docker-kontin EC2-instanssissa.

## AWS
AWS Services palveluun on luotu EC2 Instance (t3.micro) ubuntu käyttöjärjestelmällä.
Intanceen on asennettu Docker, jonka avulla käynnistetään kontti virtuaali koneen sisällä. Github action-runner on asennettu myös intancen sisälle, jotta uusi versio sovelluksesta haetaan automaattisesti jokaisen sovelluksen main haara puskun yhteydessä.
NGIX avulla on määritelty ohjaamaan liikenne kontin porttiin, sekä tarvittavat configuroinnit sovelluksen toiminnalisuuden kannalta.
## Dockerfile

Dockerfile kuvaa, miten sovelluksen Docker-image rakennetaan. Se sisältää ohjeet riippuvuuksien asentamiseen, sovelluksen rakentamiseen ja ajamiseen tuotantoympäristössä.
Docker kuvan optimointiin käytetty Vercel:in tarjoamaa NextJS imagea: https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile 
## Konfigurointi ja ympäristömuuttujat

(Yksityiskohtainen kuvaus mahdollisista konfiguraatioista ja ympäristömuuttujista, joita sovellus käyttää.)

## Tutoriialit ja CI/CD pipelinen luontiin apuna käytetty materiaali

#### CI/CD Pipelinen luontiin ja AWS EC2
-Creating a Continuous Delivery Pipeline With GitHub Actions: How to Deploy To AWS EC2 Instantly! - https://www.youtube.com/watch?v=rRes9LM-Jh8
-Next.js Dockerfile - https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile
