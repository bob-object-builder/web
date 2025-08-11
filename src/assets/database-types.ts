type DatabaseTypeGroups = {
  [key: string]: string[];
};

export const databaseTypes: DatabaseTypeGroups = {
  integers: [
    "int",
    "int8",
    "int16",
    "int32",
    "int64",
    "uint",
    "uint8",
    "uint16",
    "uint32",
    "uint64",
  ],
  floats: ["float32", "float64"],
  strings: [
    "string",
    "string8",
    "string16",
    "string32",
    "string64",
    "text",
    "blob",
  ],
  dates: ["date", "time", "current"],
  special: ["id", "boolean"],
  attributes: [
    "primary",
    "required",
    "index",
    "auto_increment",
    "unique",
    "optional",
    "isolated",
    "= (default value)", // default value
  ],
  literals: [
    "@now", // Current date and time
    "@date", // Current date
    "@time", // Current time
    "@utc", // UTC date and time
    "@sysdate", // Evaluated at the exact moment
  ],
};
