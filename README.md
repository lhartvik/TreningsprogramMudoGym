# Treningsprogram Mudo Gym
Jeg fikk et treningsprogram av Sjefen på treningssenteret og har gått med et lefsete A4-ark hver gang i noen måneder nå.
De 7 øvelsene ville jeg heller ha inn her i en app på telefonen for den tar jeg med uansett.

## Issues og Pull requests
Alle PRer som gjør koden mer lettleselig, mer clean, eller forbedrer eksisterende funksjonalitet mottas med takk.
Ny funksjonalitet er det fint om vi blir enig om først.

## Kom i gang
Følg guiden på https://reactnative.dev/docs/environment-setup

* Aktiver utviklermodus på telefonen: Trykk 10 ganger på versjonsnummeret/serienummeret til Android (i settings et sted)
* Koble til telefon og gi PCen tillatelse til Debugging
* npm i 
* npm start
* Trykk a for Android og I for Iphone

Hvis alt går bra og appen kjører, trykk r for å resette appen.

## Rotkomponenten
App.tsx er hvor alt starter. Derfra kan man klikke seg videre til underkomponentene.

## Må sette opp Firebase
For å bruke appen må man sette opp en Realtime Database i [Firebase](https://firebase.google.com/)
Da får man laste ned en fil med navn `google-services.json`. Denne legges i folderen android/app/
Det er her alle tilkoblingsdataene står oppført.
Her er noen eksempeldata man kan legge inn: 
```
[
      { id: 0, name: "Lat pulldown", weight: 90 },
      { id: 1, name: "Chest press", weight: 70 },
      { id: 2, name: "Seated row", weight: 50 },
      { id: 3, name: "Abdominal", weight: 120 },
      { id: 4, name: "Prone leg curl", weight: 60 },
      { id: 5, name: "Leg extension", weight: 80 },
      { id: 6, name: "Leg press", weight: 215 }
    ]
```



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

* Koble fra telefonen
* gå inn på developer options på telefonen og huke bort USB Debugging.
* Revoke USB Debugging authorizations
* På PCen, `adb kill-server` og så `adb start-server`
* Huke av for USB debugging igjen på telefonen
* Koble til telefonen
* Du skal få en popup med spørsmål om denne mac-adressen kan få debugge på telefonen, klikk tillat
* Hvis du skriver adb devices nå står det "device" der det før stod "unauthorized"

### Manglende google-services.json
```
> File google-services.json is missing. The Google Services Plugin cannot function without it.
   Searched Location:
```
Skaff en slik fil ved å lage en konto og opprette en Realtime database på Firebase.
Legg den i android/app.
