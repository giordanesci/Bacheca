# Bacheca

Sito fotografico statico, pronto per GitHub Pages. Nessuna build, nessuna dipendenza da installare.

## Struttura

```
index.html      struttura della pagina
style.css       tutto lo stile
script.js       galleria, filtri, lightbox
photos.js       <- I DATI DELLE TUE FOTO (modifica questo file)
photos/         cartella dove metti i file immagine
```

## Come pubblicarlo stasera su GitHub Pages

1. **Crea un repository** su github.com → New repository → chiamalo per esempio `bacheca` → Public → Create.

2. **Carica questi file**: sulla pagina del repo appena creato clicca "uploading an existing file" e trascina dentro tutta questa cartella (`index.html`, `style.css`, `script.js`, `photos.js`, la cartella `photos`). Commit.

   Oppure da terminale, se hai già Git configurato:
   ```
   cd bacheca
   git init
   git add .
   git commit -m "primo commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/bacheca.git
   git push -u origin main
   ```

3. **Attiva Pages**: nel repo vai su Settings → Pages → sotto "Build and deployment" scegli Source: `Deploy from a branch`, Branch: `main` / cartella `/ (root)` → Save.

4. Aspetta 1-2 minuti. Il sito sarà live su:
   ```
   https://TUO-USERNAME.github.io/bacheca/
   ```

Quel link puoi già metterlo nella bio di Instagram.

## Come sostituire le foto placeholder con le tue

Ora nel sito ci sono 9 foto placeholder (da picsum.photos) solo per vedere il layout funzionare. Per mettere le tue:

1. Copia le foto dentro `photos/` (leggi `photos/README.txt`)
2. Apri `photos.js` e per ognuna aggiorna `src`, `location`, `category`, `stat`, `date`
3. Aggiungi o togli oggetti dall'array `PHOTOS` per aggiungere/rimuovere foto — il layout si adatta da solo
4. Fai commit e push (o ricarica i file su GitHub) — Pages si aggiorna da solo in ~1 minuto

## Dominio personalizzato (facoltativo, dopo)

Se poi vuoi un dominio tuo (es. `giordano.photo`) invece di `github.io`:

1. Compra il dominio da un registrar (Cloudflare Registrar, Namecheap, Porkbun...)
2. Nel repo: Settings → Pages → Custom domain → scrivi il tuo dominio
3. Dal pannello DNS del registrar aggiungi un record `CNAME` che punta a `TUO-USERNAME.github.io`
   (per un dominio "nudo" tipo `giordano.photo` senza `www`, servono invece dei record `A` che GitHub
   indica nella sua documentazione — te lo mostra anche la pagina Settings → Pages una volta inserito il dominio)
4. Aspetta la propagazione DNS (di solito minuti, a volte fino a 24h) — GitHub emette da solo un certificato HTTPS

Non serve farlo subito: `TUO-USERNAME.github.io/bacheca` funziona già bene per iniziare.
