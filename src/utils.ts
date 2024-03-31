export const countColors = (colors: ColorState[], doCountSeeds: boolean): { count: number, max: number } => {
  let count = 0;
  let max = 0;

  colors.forEach( colorState => {
    switch (colorState) {
      case "on":
        count++;
        max++;
        break;
      case "off":
        max++;
        break;
      case "seed":
        if (doCountSeeds) {
          count++;
        }
        max++;
        break;
      default:
        break;
    }
  });

  return { count, max };
};