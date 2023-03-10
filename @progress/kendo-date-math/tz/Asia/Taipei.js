const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Taipei": [
      [
        -486,
        "-",
        "LMT",
        -2335219200000
      ],
      [
        -480,
        "-",
        "CST",
        -1017792000000
      ],
      [
        -540,
        "-",
        "JST",
        -766191600000
      ],
      [
        -480,
        "Taiwan",
        "C%sT",
        null
      ]
    ]
  },
  "rules": {
    "Taiwan": [
      [
        1946,
        "only",
        "-",
        "May",
        "15",
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
        1946,
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
        1947,
        "only",
        "-",
        "Apr",
        "15",
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
        1947,
        "only",
        "-",
        "Nov",
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
        1948,
        1951,
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
        "D"
      ],
      [
        1948,
        1951,
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
        1952,
        "only",
        "-",
        "Mar",
        "1",
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
        1952,
        1954,
        "-",
        "Nov",
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
        1953,
        1959,
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
        "D"
      ],
      [
        1955,
        1961,
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
        1960,
        1961,
        "-",
        "Jun",
        "1",
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
        1974,
        1975,
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
        "D"
      ],
      [
        1974,
        1975,
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
        1979,
        "only",
        "-",
        "Jul",
        "1",
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
        1979,
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
      ]
    ]
  },
  "titles": {
    "Asia/Taipei": {
      "long": "Taipei Standard Time",
      "group": "(GMT+08:00) Taipei"
    }
  }
});