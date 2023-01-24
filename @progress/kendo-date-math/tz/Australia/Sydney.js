const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Australia/Sydney": [
      [
        -604.8666666666667,
        "-",
        "LMT",
        -2364076800000
      ],
      [
        -600,
        "Aus",
        "AE%sT",
        62985600000
      ],
      [
        -600,
        "AN",
        "AE%sT",
        null
      ]
    ]
  },
  "rules": {
    "Aus": [
      [
        1917,
        "only",
        "-",
        "Jan",
        "1",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1917,
        "only",
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1942,
        "only",
        "-",
        "Jan",
        "1",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1942,
        "only",
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1942,
        "only",
        "-",
        "Sep",
        "27",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1943,
        1944,
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1943,
        "only",
        "-",
        "Oct",
        "3",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ]
    ],
    "AN": [
      [
        1971,
        1985,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1972,
        "only",
        "-",
        "Feb",
        "27",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1973,
        1981,
        "-",
        "Mar",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1982,
        "only",
        "-",
        "Apr",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1983,
        1985,
        "-",
        "Mar",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1986,
        1989,
        "-",
        "Mar",
        "Sun>=15",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1986,
        "only",
        "-",
        "Oct",
        "19",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1987,
        1999,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        1990,
        1995,
        "-",
        "Mar",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        1996,
        2005,
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        2000,
        "only",
        "-",
        "Aug",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        2001,
        2007,
        "-",
        "Oct",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ],
      [
        2006,
        "only",
        "-",
        "Apr",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        2007,
        "only",
        "-",
        "Mar",
        "lastSun",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        2008,
        "max",
        "-",
        "Apr",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        0,
        "S"
      ],
      [
        2008,
        "max",
        "-",
        "Oct",
        "Sun>=1",
        [
          2,
          0,
          0,
          "s"
        ],
        60,
        "D"
      ]
    ]
  },
  "titles": {
    "Australia/Sydney": {
      "long": "AUS Eastern Standard Time",
      "group": "(GMT+10:00) Canberra, Melbourne, Sydney"
    }
  }
});