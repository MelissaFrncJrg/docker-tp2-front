# TP2 – Docker et Docker compose

Le repo **tp2-front** contient aussi le fichier `docker-compose.yml` pour builder et lancer **directement** les deux services :

- Le front dans son dossier (`.`)
- Le back en build local par rapport au dossier `../tp2-back`

---

## Prérequis

- Docker & Docker Compose
- Node (pour builder si besoin en local)

---

## Lancement

1. **Cloner** les deux dépôts côte-à-côte dans le même dossier parent

```bash
git clone https://github.com/MelissaFrncJrg/docker-tp2-back.git tp2-back
git clone https://github.com/MelissaFrncJrg/docker-tp2-front.git tp2-front
```

2. Entrer dans le dossier front

```bash
cd tp2-front
```

3. Démarrer l’ensemble

```bash
docker-compose up --build
```

### URL d'accès

Ouvrir http://localhost:3003

# Accès en ligne

- [https://docker-tp2-front.vercel.app](https://docker-tp2-front.vercel.app)
