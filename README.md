# SICAC

## Installation

### Installer Expo

```
npm install -g react-native-cli
```
### Installer les dépendances

```
cd SICAC
```

```
yarn install
```

### Démarer le projet

!!! Démarer l'émulateur avant !!!

```
yarn android
```

___

## Informations sur le projet

Le projet est réalisé en React Native et utilise Redux. Ce dépôt contient l'application mobile SICAC. L'application web réalisée en plus se trouve au lien suivant : https://github.com/EstebanEstoc/SICACAgenda


### Architecture du projet

L'utilisation de redux nous a poussé à utiliser les trois dossiers `components/` `reducers/` et `store/` pour l'architecture du projet. 

```
.
├── ...
├── README.md
└── SICAC
    ├── ...
    ├── assets          # Images et icônes
    ├── components      # Components (redux)
    ├── data            # Données brutes (actions, conditions, scénarios exemples)
    ├── helpers         # Fichiers d'aide, utiles pour des tests pendant le développement
    ├── reducers        # Reducers (redux)
    ├── services        # Back-end des actions/conditions (capteurs, API, script background)
    ├── store           # Store (redux)
    ├── test            # Tests des reducers
```

### Actions et conditions

La bibliothèque des **actions** est composée de :
- "Launch music" : non implémentée
- "Trigger the pedometer" : non implémentée
- "Lights" : non implémentée
- "Shutters" : non implémentée
- "Launch a simple form" : implémentée
- "Launch a form with SMS" : implémentée
- "Alert" : implémentée
- "Sms" : implémentée
- "Mail" : implémentée


La bibliothèque des **conditions** est composée de :
- "Home" : non implémentée
- "Location" : non implémentée
- "High heart rate" : non implémentée
- "Connected to earphones" : non implémentée
- "Connected to speaker" : non implémentée
- "Time of day" : implémentée
- "Have to answer form" : implémentée
- "Have to walk" : implémentée
- "Have an appointment" : implémentée
- "Have to take pills" : implémentée

### APIs utilisées

#### Google Agenda API
Pour les conditions "Have to answer form", "Have to walk", "Have an appointment" et "Have to take pills", nous avons utilisé l'API Google Agenda. En récupérant les événements d'un calendrier, il est possible de filtrer les titres de ces derniers et donc de détecter un événément avec un titre particulier.

#### Sunrise Sunset API
Pour la condition "Time of day", l'API Sunrise Sunset (https://sunrise-sunset.org/api) a été utilisée. Elle permet de récupérer les heures de lever et coucher du soleil et donc de déduire si il fait jour ou nuit.
