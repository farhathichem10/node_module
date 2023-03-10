const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Miquelon": [
      [
        224.66666666666666,
        "-",
        "LMT",
        -1850342400000
      ],
      [
        240,
        "-",
        "AST",
        325987200000
      ],
      [
        180,
        "-",
        "-03",
        567907200000
      ],
      [
        180,
        "Canada",
        "-03/-02",
        null
      ]
    ]
  },
  "rules": {
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
    "America/Miquelon": {
      "long": null,
      "group": null
    }
  }
});