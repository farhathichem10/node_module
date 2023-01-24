const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Seoul": [
      [
        -507.8666666666667,
        "-",
        "LMT",
        -1948752000000
      ],
      [
        -510,
        "-",
        "KST",
        -1830384000000
      ],
      [
        -540,
        "-",
        "JST",
        -767318400000
      ],
      [
        -540,
        "ROK",
        "K%sT",
        -498096000000
      ],
      [
        -510,
        "ROK",
        "K%sT",
        -264902400000
      ],
      [
        -540,
        "ROK",
        "K%sT",
        null
      ]
    ]
  },
  "rules": {
    "ROK": [
      [
        1948,
        "only",
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
        1948,
        "only",
        "-",
        "Sep",
        "12",
        [
          24,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1949,
        "only",
        "-",
        "Apr",
        "3",
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
        1949,
        1951,
        "-",
        "Sep",
        "Sat>=7",
        [
          24,
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
        1951,
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
        "D"
      ],
      [
        1955,
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
        "D"
      ],
      [
        1955,
        "only",
        "-",
        "Sep",
        "8",
        [
          24,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1956,
        "only",
        "-",
        "May",
        "20",
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
        1956,
        "only",
        "-",
        "Sep",
        "29",
        [
          24,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1957,
        1960,
        "-",
        "May",
        "Sun>=1",
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
        1957,
        1960,
        "-",
        "Sep",
        "Sat>=17",
        [
          24,
          0,
          0,
          null
        ],
        0,
        "S"
      ],
      [
        1987,
        1988,
        "-",
        "May",
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
        1987,
        1988,
        "-",
        "Oct",
        "Sun>=8",
        [
          3,
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
    "Asia/Seoul": {
      "long": "Korea Standard Time",
      "group": "(GMT+09:00) Seoul"
    }
  }
});