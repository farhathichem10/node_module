const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-6": [
      [
        -360,
        "-",
        "+06",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-6": {
      "long": "Central Asia Standard Time",
      "group": "(GMT+06:00) Astana, Dhaka"
    }
  }
});