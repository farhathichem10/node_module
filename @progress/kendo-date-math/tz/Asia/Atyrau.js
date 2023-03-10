const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Atyrau": [
      [
        -207.73333333333335,
        "-",
        "LMT",
        -1441152000000
      ],
      [
        -180,
        "-",
        "+03",
        -1247529600000
      ],
      [
        -300,
        "-",
        "+05",
        370742400000
      ],
      [
        -360,
        "-",
        "+06",
        386467200000
      ],
      [
        -300,
        "RussiaAsia",
        "+05/+06",
        670384800000
      ],
      [
        -240,
        "RussiaAsia",
        "+04/+05",
        695786400000
      ],
      [
        -300,
        "RussiaAsia",
        "+05/+06",
        922586400000
      ],
      [
        -240,
        "RussiaAsia",
        "+04/+05",
        1099188000000
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
    "Asia/Atyrau": {
      "long": null,
      "group": null
    }
  }
});