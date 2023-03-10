const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Tijuana": [
      [
        468.06666666666666,
        "-",
        "LMT",
        -1514739600000
      ],
      [
        420,
        "-",
        "MST",
        -1420156800000
      ],
      [
        480,
        "-",
        "PST",
        -1343091600000
      ],
      [
        420,
        "-",
        "MST",
        -1234828800000
      ],
      [
        480,
        "-",
        "PST",
        -1222992000000
      ],
      [
        480,
        "1:00",
        "PDT",
        -1207267200000
      ],
      [
        480,
        "-",
        "PST",
        -873849600000
      ],
      [
        480,
        "1:00",
        "PWT",
        -769395600000
      ],
      [
        480,
        "1:00",
        "PPT",
        -761702400000
      ],
      [
        480,
        "-",
        "PST",
        -686102400000
      ],
      [
        480,
        "1:00",
        "PDT",
        -661564800000
      ],
      [
        480,
        "-",
        "PST",
        -473472000000
      ],
      [
        480,
        "CA",
        "P%sT",
        -252547200000
      ],
      [
        480,
        "-",
        "PST",
        220838400000
      ],
      [
        480,
        "US",
        "P%sT",
        851990400000
      ],
      [
        480,
        "Mexico",
        "P%sT",
        1009756800000
      ],
      [
        480,
        "US",
        "P%sT",
        1014163200000
      ],
      [
        480,
        "Mexico",
        "P%sT",
        1293753600000
      ],
      [
        480,
        "US",
        "P%sT",
        null
      ]
    ]
  },
  "rules": {
    "CA": [
      [
        1948,
        "only",
        "-",
        "Mar",
        "14",
        [
          2,
          1,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1949,
        "only",
        "-",
        "Jan",
        "1",
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
        1950,
        1966,
        "-",
        "Apr",
        "lastSun",
        [
          1,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1950,
        1961,
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
        1962,
        1966,
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
    "Mexico": [
      [
        1931,
        "only",
        "-",
        "May",
        "1",
        [
          23,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1931,
        "only",
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
        "S"
      ],
      [
        1939,
        "only",
        "-",
        "Feb",
        "5",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1939,
        "only",
        "-",
        "Jun",
        "25",
        [
          0,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1940,
        "only",
        "-",
        "Dec",
        "9",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1941,
        "only",
        "-",
        "Apr",
        "1",
        [
          0,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1943,
        "only",
        "-",
        "Dec",
        "16",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "W",
        ""
      ],
      [
        1944,
        "only",
        "-",
        "May",
        "1",
        [
          0,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1950,
        "only",
        "-",
        "Feb",
        "12",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "D"
      ],
      [
        1950,
        "only",
        "-",
        "Jul",
        "30",
        [
          0,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1996,
        2000,
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
        1996,
        2000,
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
        2001,
        "only",
        "-",
        "May",
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
        2001,
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
        2002,
        2022,
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
        2002,
        2022,
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
    "America/Tijuana": {
      "long": "Pacific Standard Time",
      "group": "(GMT-08:00) Pacific Time (US & Canada)"
    }
  }
});