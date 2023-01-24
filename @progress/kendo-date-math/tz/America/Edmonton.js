const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Edmonton": [
      [
        453.8666666666667,
        "-",
        "LMT",
        -1998691200000
      ],
      [
        420,
        "Edm",
        "M%sT",
        567907200000
      ],
      [
        420,
        "Canada",
        "M%sT",
        null
      ]
    ]
  },
  "rules": {
    "Edm": [
      [
        1918,
        1919,
        "-",
        "Apr",
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
        1918,
        "only",
        "-",
        "Oct",
        "27",
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
        1919,
        "only",
        "-",
        "May",
        "27",
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
        1920,
        1923,
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
        1920,
        "only",
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
        1921,
        1923,
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
        1947,
        "only",
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
        "only",
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
        1972,
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
        1972,
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
      ]
    ],
    "Canada": [
      [
        1918,
        "only",
        "-",
        "Apr",
        "14",
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
        "only",
        "-",
        "Oct",
        "27",
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
        1974,
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
        1974,
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
    ]
  },
  "titles": {
    "America/Edmonton": {
      "long": "Mountain Standard Time",
      "group": "(GMT-07:00) Mountain Time (US & Canada)"
    }
  }
});