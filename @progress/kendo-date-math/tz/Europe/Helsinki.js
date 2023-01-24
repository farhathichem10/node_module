const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Helsinki": [
      [
        -99.81666666666668,
        "-",
        "LMT",
        -2890252800000
      ],
      [
        -99.81666666666668,
        "-",
        "HMT",
        -1535932800000
      ],
      [
        -120,
        "Finland",
        "EE%sT",
        441676800000
      ],
      [
        -120,
        "EU",
        "EE%sT",
        null
      ]
    ]
  },
  "rules": {
    "Finland": [
      [
        1942,
        "only",
        "-",
        "Apr",
        "2",
        [
          24,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1942,
        "only",
        "-",
        "Oct",
        "4",
        [
          1,
          0,
          0,
          null
        ],
        0,
        "-"
      ],
      [
        1981,
        1982,
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1981,
        1982,
        "-",
        "Sep",
        "lastSun",
        [
          3,
          0,
          0,
          null
        ],
        0,
        "-"
      ]
    ],
    "EU": [
      [
        1977,
        1980,
        "-",
        "Apr",
        "Sun>=1",
        [
          1,
          0,
          0,
          "u"
        ],
        60,
        "S"
      ],
      [
        1977,
        "only",
        "-",
        "Sep",
        "lastSun",
        [
          1,
          0,
          0,
          "u"
        ],
        0,
        "-"
      ],
      [
        1978,
        "only",
        "-",
        "Oct",
        "1",
        [
          1,
          0,
          0,
          "u"
        ],
        0,
        "-"
      ],
      [
        1979,
        1995,
        "-",
        "Sep",
        "lastSun",
        [
          1,
          0,
          0,
          "u"
        ],
        0,
        "-"
      ],
      [
        1981,
        "max",
        "-",
        "Mar",
        "lastSun",
        [
          1,
          0,
          0,
          "u"
        ],
        60,
        "S"
      ],
      [
        1996,
        "max",
        "-",
        "Oct",
        "lastSun",
        [
          1,
          0,
          0,
          "u"
        ],
        0,
        "-"
      ]
    ]
  },
  "titles": {
    "Europe/Helsinki": {
      "long": "FLE Standard Time",
      "group": "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
    }
  }
});