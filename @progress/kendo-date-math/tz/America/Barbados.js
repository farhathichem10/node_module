const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Barbados": [
      [
        238.48333333333335,
        "-",
        "LMT",
        -1841270400000
      ],
      [
        240,
        "Barb",
        "A%sT",
        -789004800000
      ],
      [
        240,
        "Barb",
        "AST/-0330",
        -757468800000
      ],
      [
        240,
        "Barb",
        "A%sT",
        null
      ]
    ]
  },
  "rules": {
    "Barb": [
      [
        1942,
        "only",
        "-",
        "Apr",
        "19",
        [
          5,
          0,
          0,
          "u"
        ],
        60,
        "D"
      ],
      [
        1942,
        "only",
        "-",
        "Aug",
        "31",
        [
          6,
          0,
          0,
          "u"
        ],
        0,
        "S"
      ],
      [
        1943,
        "only",
        "-",
        "May",
        "2",
        [
          5,
          0,
          0,
          "u"
        ],
        60,
        "D"
      ],
      [
        1943,
        "only",
        "-",
        "Sep",
        "5",
        [
          6,
          0,
          0,
          "u"
        ],
        0,
        "S"
      ],
      [
        1944,
        "only",
        "-",
        "Apr",
        "10",
        [
          5,
          0,
          0,
          "u"
        ],
        30,
        "-"
      ],
      [
        1944,
        "only",
        "-",
        "Sep",
        "10",
        [
          6,
          0,
          0,
          "u"
        ],
        0,
        "S"
      ],
      [
        1977,
        "only",
        "-",
        "Jun",
        "12",
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
        1977,
        1978,
        "-",
        "Oct",
        "Sun>=1",
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
        1978,
        1980,
        "-",
        "Apr",
        "Sun>=15",
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
        1979,
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
        1980,
        "only",
        "-",
        "Sep",
        "25",
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
    "America/Barbados": {
      "long": "SA Western Standard Time",
      "group": "(GMT-04:00) La Paz"
    }
  }
});