const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Indiana/Knox": [
      [
        346.5,
        "-",
        "LMT",
        -2717647200000
      ],
      [
        360,
        "US",
        "C%sT",
        -694396800000
      ],
      [
        360,
        "Starke",
        "C%sT",
        -242258400000
      ],
      [
        300,
        "-",
        "EST",
        -195084000000
      ],
      [
        360,
        "US",
        "C%sT",
        688528800000
      ],
      [
        300,
        "-",
        "EST",
        1143943200000
      ],
      [
        360,
        "US",
        "C%sT",
        null
      ]
    ]
  },
  "rules": {
    "US": [
      [
        1918,
        1919,
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
        "D"
      ],
      [
        1918,
        1919,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1942,
        "only",
        "-",
        "Feb",
        "9",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "W",
        ""
      ],
      [
        1945,
        "only",
        "-",
        "Aug",
        "14",
        [
          23,
          0,
          0,
          "u"
        ],
        60,
        "P",
        ""
      ],
      [
        1945,
        "only",
        "-",
        "Sep",
        "30",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1967,
        2006,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1967,
        1973,
        "-",
        "Apr",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1974,
        "only",
        "-",
        "Jan",
        "6",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1975,
        "only",
        "-",
        "Feb",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1976,
        1986,
        "-",
        "Apr",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1987,
        2006,
        "-",
        "Apr",
        "Sun>=1",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        2007,
        "max",
        "-",
        "Mar",
        "Sun>=8",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        2007,
        "max",
        "-",
        "Nov",
        "Sun>=1",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ]
    ],
    "Starke": [
      [
        1947,
        1961,
        "-",
        "Apr",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1947,
        1954,
        "-",
        "Sep",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1955,
        1956,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1957,
        1958,
        "-",
        "Sep",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1959,
        1961,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          null
        ],
        0,
        "S"
      ]
    ]
  },
  "titles": {
    "America/Indiana/Knox": {
      "long": "Central Standard Time",
      "group": "(GMT-06:00) Central Time (US & Canada)"
    }
  }
});