const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Dushanbe": [
      [
        -275.2,
        "-",
        "LMT",
        -1441152000000
      ],
      [
        -300,
        "-",
        "+05",
        -1247529600000
      ],
      [
        -360,
        "RussiaAsia",
        "+06/+07",
        670384800000
      ],
      [
        -300,
        "1:00",
        "+06",
        684381600000
      ],
      [
        -300,
        "-",
        "+05",
        null
      ]
    ]
  },
  "rules": {
    "RussiaAsia": [
      [
        1981,
        1984,
        "-",
        "Apr",
        "1",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "-"
      ],
      [
        1981,
        1983,
        "-",
        "Oct",
        "1",
        [
          0,
          0,
          0,
          null
        ],
        0,
        "-"
      ],
      [
        1984,
        1995,
        "-",
        "Sep",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "-"
      ],
      [
        1985,
        2010,
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "-"
      ],
      [
        1996,
        2010,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "-"
      ]
    ]
  },
  "titles": {
    "Asia/Dushanbe": {
      "long": "West Asia Standard Time",
      "group": "(GMT+05:00) Tashkent"
    }
  }
});