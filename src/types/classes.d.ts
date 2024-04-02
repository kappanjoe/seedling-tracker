export class Preferences implements Indexable {
  [key: string]: string | boolean;
  labelsOn: boolean;
  theme: string;
  seedsOn: boolean;
  doCountSeeds: boolean;

  constructor() {
    this.labelsOn = true;
    this.theme = "system";
    this.seedsOn = true;
    this.doCountSeeds = false;
  }
};