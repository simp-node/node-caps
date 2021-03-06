export default {
  def: (str: string) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    const first = str.search(/[a-zA-Z]/);
    return (
      str.slice(0, first) +
      str.slice(first, first + 1).toUpperCase() +
      str.slice(first + 1).toLowerCase()
    );
  },
  keep: (str: string): string => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type ${typeof str}`
      );
    const first = str.search(/[a-zA-Z]/);
    return (
      str.slice(0, first) +
      str.slice(first, first + 1).toUpperCase() +
      str.slice(first + 1)
    );
  },
  all: (str: string): string => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split(" ")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(" ");
  },
  array: (str: string[]): string[] => {
    if (!str || (typeof str[0] !== "string" && str.length > 1))
      throw new TypeError(
        `Parameter str must be typeof Array, recieved type "${typeof str}"`
      );
    try {
      return str.map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      });
    } catch (err) {
      let error = new TypeError(
        `Parameter str must be typeof Array, recieved type ${typeof str}`
      );
      throw error;
    }
  },
  sent: (str: string): string => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split(".")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(".");
  },
  dash: (str: string): string => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split("-")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(".");
  },
  reg: (str: string): string => {
    if (str.match(/-/) && str.split("-")[1].length < 3)
      return str
        .split("-")
        .map((s, i) => {
          const first = s.search(/[a-zA-Z]/);
          if (i > 0) return s.toUpperCase();
          else
            return s.slice(first, first + 1).toUpperCase() + s.slice(first + 1);
        })
        .join("-");
    return str
      .split(" ")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(" ");
  },
  perms: (str: string[]): string[] => {
    return str.map((v) => {
      if (!v || typeof v !== "string")
        throw new TypeError(
          `Parameter str must be typeof String, recieved type "${typeof str}"`
        );
      if (v.includes("_")) {
        return v
          .split(/_/g)
          .map((s) => {
            return s.charAt(0) + s.slice(1).toLowerCase();
          })
          .join(" ");
      } else {
        return v.charAt(0) + v.slice(1).toLowerCase();
      }
    });
  },
} as {
  def(str: string): string;
  keep(str: string): string;
  all(str: string): string;
  array(str: string[]): string[];
  sent(str: string): string;
  dash(str: string): string;
  reg(str: string): string;
  perms(str: string[]): string[];
};
