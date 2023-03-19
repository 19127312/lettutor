import { IMGS } from "../constants";

export function getFlag(language) {
  switch (language) {
    case "usa":
      return IMGS.usa;
    case "VN":
      return IMGS.vi;
    case "PH":
      return IMGS.ph;
    case "TW":
      return IMGS.tw;

    default:
      return IMGS.global;
  }
}
