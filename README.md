# Treningsprogram Mudo Gym

Jeg fikk et treningsprogram av Sjefen på treningssenteret og har gått med et lefsete A4-ark hver gang i noen måneder nå.
De 7 øvelsene ville jeg heller ha inn her i en app på telefonen for den tar jeg med uansett.

## Issues og Pull requests

Alle PRer som gjør koden mer lettleselig, mer clean, eller forbedrer eksisterende funksjonalitet mottas med takk.
Ny funksjonalitet er det fint om vi blir enig om først.

## Kom i gang

Følg guiden på https://reactnative.dev/docs/environment-setup

- Aktiver utviklermodus på telefonen: Trykk 10 ganger på versjonsnummeret/serienummeret til Android (i settings et sted)
- Koble til telefon og gi PCen tillatelse til Debugging
- npm i
- npm start
- Trykk a for Android og I for Iphone

Hvis alt går bra og appen kjører, trykk r for å resette appen.

## Filer som jeg har skrevet

### App.tsx

App.tsx er rotkomponenten hvor alt starter. Derfra kan man klikke seg videre til underkomponentene. Jeg tok utgangspunkt i [denne](https://github.com/lhartvik/reggieGlobomantics/blob/master/App.js)

### StartingScreen

Denne komponenten ba jeg ChatGPT om å skrive et utkast til. Så byttet jeg ut teksten og la på en knapp for å komme til ExerciseScreen

### ExerciseScreen

Også her ba jeg ChatGPT lage et utkast til meg som jeg så bygde videre på. Fikk faktisk splittet den opp i mindre biter også.

## Må sette opp Firebase

For å bruke appen må man sette opp en Realtime Database i [Firebase](https://firebase.google.com/) og lage et nytt prosjekt med en realtime database.
Gå inn på Project settings og Connect to app, package: "no.hartvigsen.lars.treningsprogrammudogym" 
( du kan også opprette din egen app og kopiere inn tsx-filene og package.json )
Da får man laste ned en fil med navn `google-services.json`. Denne legges i folderen android/app/
Det er her alle tilkoblingsdataene står oppført.
Her er noen eksempeldata man kan evt redigere og legge inn: [eksempeldata.json](./app/db/eksempeldata.json)
Det er en egen knapp for å importere json - man åpner Realtime database og klikker på de tre prikkene øverst til høyre. 

## Feil jeg har opplevd

### Rettigheter til Gradlew

Hvis android/gradlew ikke har executable-rettighet:

```
Error: spawn ./gradlew EACCES
at Process.ChildProcess._handle.onexit (node:internal/child_process:283:19)
at onErrorNT (node:internal/child_process:478:16)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
info Run CLI with --verbose flag for more details.
```

Løsning:
`chmod +x android/gradlew`

### Android SDK ikke installert

Forsøker man å kjøre npm start uten å ha installert Android SDK noe sted får man:

```
> SDK location not found. Define a valid SDK location with an ANDROID_HOME environment
variable or by setting the sdk.dir path in your project's local properties file
at '/Users/lars/code/TreningsprogramMudoGym/android/local.properties'.
```

Løsning: Følge guiden på https://reactnative.dev/docs/environment-setup

### Deployer ikke til telefonen

Kan være fordi den står som unauthorized. Har opplevd dette på Mac og Windows.

```
adb devices
```

Står det unauthorized? Da kan man gjøre følgende:

- Koble fra telefonen
- gå inn på developer options på telefonen og huke bort USB Debugging.
- Revoke USB Debugging authorizations(kanskje unødvendig og fører kanskje til at man må gjøre dette pånytt hver gang man bytter hvilken PC man koblet mobilen til)
- På PCen, `adb kill-server` og så `adb start-server`
- Huke av for USB debugging igjen på telefonen
- Koble til telefonen
- Du skal få en popup med spørsmål om denne mac-adressen kan få debugge på telefonen, klikk tillat
- Hvis du skriver adb devices nå står det "device" der det før stod "unauthorized"

### Manglende google-services.json

```
> File google-services.json is missing. The Google Services Plugin cannot function without it.
   Searched Location:
```

Skaff en slik fil ved å lage en konto og opprette en Realtime database på Firebase.
Legg den i android/app.

