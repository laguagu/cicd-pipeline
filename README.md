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
```bash
  git clone https://github.com/laguagu/nextJS-todo.git
```
2. **Asenna riippuvuudet:**
```bash
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
  ```docker pull laguagu/cicd-pipeline:latest```
- Poistaa vanhan Docker-kontin, jos sellainen on olemassa.
- Käynnistää uuden Docker-kontin EC2-instanssissa.

## AWS
AWS Services palveluun on luotu EC2 Instance (t3.micro) Ubuntu-käyttöjärjestelmällä. Instanceen on asennettu Docker, jonka avulla käynnistetään kontti virtuaalikoneen sisällä. GitHub action-runner on asennettu myös instancen sisälle, jotta uusi versio sovelluksesta haetaan automaattisesti jokaisen sovelluksen main-haaran pushin yhteydessä. NGINX avulla on määritelty ohjaamaan liikenne kontin porttiin, sekä tarvittavat konfiguraatiot sovelluksen toiminnallisuuden kannalta.

## Dockerfile

Dockerfile kuvaa, miten sovelluksen Docker-image rakennetaan. Se sisältää ohjeet riippuvuuksien asentamiseen, sovelluksen rakentamiseen ja ajamiseen tuotantoympäristössä.
Docker kuvan optimointiin käytetty Vercelin tarjoamaa NextJS-imagea: https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile 

## Ympäristömuuttujat

DOCKER_PASSWORD, DOCKER_USERNAME

## Tutoriialit ja CI/CD pipelinen luontiin apuna käytetty materiaali

#### CI/CD Pipelinen luontiin ja AWS EC2
<p>Creating a Continuous Delivery Pipeline With GitHub Actions: How to Deploy To AWS EC2 Instantly! <br> https://www.youtube.com/watch?v=rRes9LM-Jh8</p>
<p>Next.js Dockerfile <br> https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile </p>
