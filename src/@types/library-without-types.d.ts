declare module "kp-package/player" {
  interface Player {
    version: string;
  }
  export function play(): Player;
  export const PlayerVersion: Player["version"];
}
