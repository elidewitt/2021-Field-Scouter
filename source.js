const pitScouter = {
  "Pregame" : {
    "General Information" : {
      "Scouter Name" : {
        "element" : "input",
        "type" : "text"
      },
      "Match Number" : {
        "element" : "input",
        "type" : "number"
      },
      "Team Number" : {
        "element" : "select",
        "type" : "number",
        "options" : [
          "0093 : NEW Apple Corps",
          "0167 : Children of the Corn"
        ]
      },
      "No Show?" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Alliance" : {
      "Alliance" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Red", "Blue"]
      }
    },
    "Start Position" : {
      "Start Position" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Far", "Middle", "Close"]
      }
    }
  },
  "Autonomous" : {
    "Power Ports" : {
      "Upper" : {
        "element" : "input",
        "type" : "number"
      },
      "Lower" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Bot Info" : {
      "Cross Initiation Line?" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Shooting Location" : {
      "Target Zone" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Trench" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Tele-Op" : {
    "Power Ports" : {
      "Upper" : {
        "element" : "input",
        "type" : "number"
      },
      "Lower" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Control Panel" : {
      "Rotation Control" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Position Control" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Shooting Location" : {
      "Target Zone" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Trench" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Endgame" : {
    "Robot Placement" : {
      "Robot Placement" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Park", "Hang"]
      },
      "Cell Loading Method" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Driver Station", "Pick up off Ground", "Both", "Other (Specify in comments)"]
      }
    },
    "End Game" : {
      "Can they Hang" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Leveling method" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Postgame" : {
    "Technical Issues" : {
      "Any Technical Issues? (Specify in comments)" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Final Scores" : {
      "Alliance Score" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Cards" : {
      "Any Cards Given To Your Alliance?" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Yellow", "Red"]
      }
    },
    "Comments" : {
      "Comments" : {
        "element" : "input",
        "type" : "text"
      }
    }
  },
  "" : {
    "" : {
      "" : {
        "element" : "button",
        "type" : "submit"
      }
    }
  }
}
