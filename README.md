# QR-code Generator voor Login Gegevens

Deze webapplicatie genereert een QR-code met e-mail en wachtwoord gegevens die kunnen worden gescand om automatisch in te loggen op een ander apparaat.

## Installatie

1. Installeer de dependencies:
```bash
npm install
```

2. Start de ontwikkelserver:
```bash
npm start
```

De applicatie zal beschikbaar zijn op `http://localhost:3000`

## Gebruik

1. Vul je e-mail en wachtwoord in het formulier in
2. Klik op "Genereer QR-code"
3. Scan de gegenereerde QR-code met een ander apparaat
4. De gegevens worden automatisch ingevuld op het andere apparaat

## Technologieën

- React
- TypeScript
- Tailwind CSS
- qrcode.react 