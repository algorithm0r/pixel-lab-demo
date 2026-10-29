// Generated from PixelLab tileset metadata. Wang corner key = NW NE SW SE.
// Letters: g grass, p path, w water, f fir floor, b brick wall.
const DEMO_TILESETS = {
  "p": {
    "image": "sprites/tiles_grass_path.png",
    "tiles": {
      "ppgp": [
        0,
        0
      ],
      "pgpg": [
        32,
        0
      ],
      "gpgg": [
        64,
        0
      ],
      "ppgg": [
        96,
        0
      ],
      "gppg": [
        0,
        32
      ],
      "pggg": [
        32,
        32
      ],
      "gggg": [
        64,
        32
      ],
      "gggp": [
        96,
        32
      ],
      "pgpp": [
        0,
        64
      ],
      "ggpp": [
        32,
        64
      ],
      "ggpg": [
        64,
        64
      ],
      "gpgp": [
        96,
        64
      ],
      "pppp": [
        0,
        96
      ],
      "pppg": [
        32,
        96
      ],
      "pggp": [
        64,
        96
      ],
      "gppp": [
        96,
        96
      ]
    }
  },
  "w": {
    "image": "sprites/tiles_water_grass.png",
    "tiles": {
      "ggwg": [
        0,
        0
      ],
      "gwgw": [
        32,
        0
      ],
      "wgww": [
        64,
        0
      ],
      "ggww": [
        96,
        0
      ],
      "wggw": [
        0,
        32
      ],
      "gwww": [
        32,
        32
      ],
      "wwww": [
        64,
        32
      ],
      "wwwg": [
        96,
        32
      ],
      "gwgg": [
        0,
        64
      ],
      "wwgg": [
        32,
        64
      ],
      "wwgw": [
        64,
        64
      ],
      "wgwg": [
        96,
        64
      ],
      "gggg": [
        0,
        96
      ],
      "gggw": [
        32,
        96
      ],
      "gwwg": [
        64,
        96
      ],
      "wggg": [
        96,
        96
      ]
    }
  },
  "b": {
    "image": "sprites/tiles_fir_brick.png",
    "tiles": {
      "bbfb": [
        0,
        0
      ],
      "bfbf": [
        32,
        0
      ],
      "fbff": [
        64,
        0
      ],
      "bbff": [
        96,
        0
      ],
      "fbbf": [
        0,
        32
      ],
      "bfff": [
        32,
        32
      ],
      "ffff": [
        64,
        32
      ],
      "fffb": [
        96,
        32
      ],
      "bfbb": [
        0,
        64
      ],
      "ffbb": [
        32,
        64
      ],
      "ffbf": [
        64,
        64
      ],
      "fbfb": [
        96,
        64
      ],
      "bbbb": [
        0,
        96
      ],
      "bbbf": [
        32,
        96
      ],
      "bffb": [
        64,
        96
      ],
      "fbbb": [
        96,
        96
      ]
    }
  }
};

// Outdoor terrain at each tile corner
const DEMO_VERTICES = [
    'ggggggggpppgggggg',
    'ggggggggpppggwwwg',
    'ggggggggpppggwwww',
    'ggggggggpppggwwww',
    'ggggggggpppggwwwg',
    'ggggggggpppgggggg',
    'ppppppppppppppppp',
    'ppppppppppppppppp',
    'ppppppppppppppppp',
    'ggggggggggggggggg',
    'ggggggggggggggggg',
];

// A cutaway brick building with its own corner grid, drawn over the outdoor cells it covers
const DEMO_BUILDING = {
    "col": 0,
    "row": 0,
    "vertices": [
        "bbbbbbbb",
        "bffffffb",
        "bffffffb",
        "bffffffb",
        "bffffffb",
        "bffffffb",
        "bbbffbbb"
    ]
};
