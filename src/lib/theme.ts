export const theme = {
  "name": "BobCode Theme",
  "type": "dark",
  "colors": {
    "editor.background": "#000000",
    "editor.foreground": "#ffffff"
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment", "comment.line"],
      "settings": {
        "foreground": "#808080"
      }
    },
    {
      "name": "String",
      "scope": [
        "string",
        "string.quoted",
        "string.quoted.single",
        "string.quoted.double",
        "string.template"
      ],
      "settings": {
        "foreground": "#89ca79"
      }
    },
    {
      "name": "Number",
      "scope": ["constant.numeric"],
      "settings": {
        "foreground": "#ffb45c"
      }
    },
    {
      "name": "Keyword",
      "scope": [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.new",
        "keyword.other.this",
        "keyword.other.super"
      ],
      "settings": {
        "foreground": "#ff6d00"
      }
    },
    {
      "name": "Type",
      "scope": [
        "entity.name.type",
        "support.type",
        "support.class",
        "storage.type.primitive",
        "entity.name.type.class",
        "entity.name.type.interface"
      ],
      "settings": {
        "foreground": "#ff6d00",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Modifier",
      "scope": [
        "storage.modifier",
        "keyword.modifier",
        "storage.type.modifier"
      ],
      "settings": {
        "foreground": "#ff9500",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Function",
      "scope": [
        "entity.name.function",
        "support.function",
        "meta.function-call entity.name.function"
      ],
      "settings": {
        "foreground": "#ffc67a",
        "fontStyle": "bold italic"
      }
    },
    {
      "name": "Class",
      "scope": [
        "entity.name.class",
        "entity.name.type.class",
        "support.class"
      ],
      "settings": {
        "foreground": "#ffc67a",
        "fontStyle": "bold italic"
      }
    },
    {
      "name": "Variable",
      "scope": [
        "variable",
        "variable.other",
        "variable.other.readwrite",
        "variable.parameter"
      ],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Property",
      "scope": [
        "variable.other.property",
        "variable.other.object.property",
        "meta.object-literal.key"
      ],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Special Key",
      "scope": [
        "constant.language",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined"
      ],
      "settings": {
        "foreground": "#40a9ff",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Operator",
      "scope": ["keyword.operator", "punctuation.accessor"],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Punctuation",
      "scope": [
        "punctuation",
        "punctuation.definition",
        "punctuation.separator",
        "punctuation.terminator"
      ],
      "settings": {
        "foreground": "#ffffff"
      }
    }
  ]
}

export default theme