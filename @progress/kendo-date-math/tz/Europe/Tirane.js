const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Tirane": [
      [
        -79.33333333333333,
        "-",
        "LMT",
        -1735776000000
      ],
      [
        -60,
        "-",
        "CET",
        -932342400000
      ],
      [
        -60,
        "Albania",
        "CE%sT",
        457488000000
      ],
      [
        -60,
        "EU",
        "CE%sT",
        null
      ]
    ]
  },
  "rules": {
    "Albania": [
      [
        1940,
        "only",
        "-",
        "Jun",
        "16",
        [
          0,
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
        "Nov",
        "2",
        [
          3,
          0,
          0,
          null
        ],
        0,
        "-"
      ],
      [
        1943,
        "only",
        "-",
        "Mar",
        "29",
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
        1943,
        "only",
        "-",
        "Apr",
        "10",
        [
          3,
          0,
          0,
          null
        ],
        0,
        "-"
      ],
      [
        1974,
        "only",
        "-",
        "May",
        "4",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1974,
        "only",
        "-",
        "Oct",
        "2",
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
        1975,
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
        60,
        "S"
      ],
      [
        1975,
        "only",
        "-",
        "Oct",
        "2",
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
        1976,
        "only",
        "-",
        "May",
        "2",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1976,
        "only",
        "-",
        "Oct",
        "3",
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
        1977,
        "only",
        "-",
        "May",
        "8",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1977,
        "only",
        "-",
        "Oct",
        "2",
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
        1978,
        "only",
        "-",
        "May",
        "6",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1978,
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
        "-"
      ],
      [
        1979,
        "only",
        "-",
        "May",
        "5",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1979,
        "only",
        "-",
        "Sep",
        "30",
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
        1980,
        "only",
        "-",
        "May",
        "3",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1980,
        "only",
        "-",
        "Oct",
        "4",
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
        1981,
        "only",
        "-",
        "Apr",
        "26",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1981,
        "only",
        "-",
        "Sep",
        "27",
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
        1982,
        "only",
        "-",
        "May",
        "2",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1982,
        "only",
        "-",
        "Oct",
        "3",
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
        1983,
        "only",
        "-",
        "Apr",
        "18",
        [
          0,
          0,
          0,
          null
        ],
        60,
        "S"
      ],
      [
        1983,
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
        "-"
      ],
      [
        1984,
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
        60,
        "S"
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
    "Europe/Tirane": {
      "long": "Central Europe Standard Time",
      "group": "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
    }
  }
});