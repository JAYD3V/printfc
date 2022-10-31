import { format } from 'node:util';

type RGBArray = [number, number, number];

export class RGB {
  #_toArray: RGBArray;
  red: number;
  grn: number;
  blu: number;

  get toArray() {
    return this.#_toArray;
  }

  constructor (rgbArrOrHexcolor: RGBArray) {
    this.#_toArray = rgbArrOrHexcolor;
    this.red = this.#_toArray[0],
      this.grn = this.#_toArray[1],
      this.blu = this.#_toArray[2];
  }


  static validateRgbArray(arr: RGBArray) {
    arr.forEach((value, index) => {
      if (value < 0 || value > 255) {
        throw new RangeError('RGB Value is out of its defined range. The values set for red, green, and blue in an rgb argument must be lesser than or equal to 255, and greater or equal to 0.');
      }
    });
  }
}

class HexColor {
  private static hexColorPatt = /^#([0-9A-F]{3}){1,2}$/;

  hexColor;

  constructor (hexColor: string) {
    this.hexColor = hexColor;
  }

  static parse(hexColor: string) {

    if (!HexColor.hexColorPatt.test(hexColor)) {
      throw new Error('Invalid hexcolor format');
    }

    if (hexColor.length !== 4 && hexColor.length !== 7) {
      throw new Error('Invalid hexcolor length');
    }

    if(hexColor.length === 4){
      const arr = hexColor.split('');
      const foo = [arr[0]];
    }
  }
}

import { format as fmt } from 'node:util';
/*




export class RGBArray extends Array<number> {
  color: RGB;

  constructor(color: RGB){
    super();

    validateRgbArray(color);

    this.color = color;

    this[0] = this.color[0];
    this[1] = this.color[1];
    this[2] = this.color[2];
  }
}



 */

/*

function validateRgbArray(arr: RGB){
  arr.forEach((value, index) => {
    if (value < 0 || value > 255){
      throw new RangeError('RGB Value is out of its defined range. The values set for red, green, and blue in an rgb argument must be lesser than or equal to 255, and greater or equal to 0.');
    }
  });
}



export class HexColor {
  private color: string;

  constructor(hexColor:string){
    this.color = hexColor;
  }

  public toRgbArray(hexColor: string): RGB{
    return hexColor.length === 7
      ? [
          Number('0x' + hexColor[1] + hexColor[2]),
          Number('0x' + hexColor[3] + hexColor[4]),
          Number('0x' + hexColor[5] + hexColor[6])
        ]
      : [
          Number('0x' + hexColor[1].repeat(2)),
          Number('0x' + hexColor[2].repeat(2)),
          Number('0x' + hexColor[3].repeat(2))
        ];
  }


  public static validateHexColor(hexColor: string){
    if (hexColor.length !== 4 && hexColor.length !== 7){
      throw new Error('');
    }

    if (!HexColor.hexColorPatt.test(hexColor)){
      throw new Error('format');
    }

    return hexColor;
  }
}
 */
