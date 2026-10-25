import { world, system } from "@minecraft/server";

const INTERVAL_TICKS = 8;

const AURA_POINTS = [
  { x: 0.42, y: 0.35, z: 0.00 },
  { x: -0.42, y: 0.70, z: 0.00 },
  { x: 0.00, y: 1.00, z: 0.42 },
  { x: 0.00, y: 1.35, z: -0.42 },
  { x: 0.30, y: 1.70, z: 0.25 },
  { x: -0.30, y: 1.45, z: -0.25 }
];

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const dimension = player.dimension;
    const position = player.location;

    for (const point of AURA_POINTS) {
      try {
        dimension.spawnParticle(
          "minecraft:blue_flame_particle",
          {
            x: position.x + point.x,
            y: position.y + point.y,
            z: position.z + point.z
          }
        );
      } catch {
        // Abaikan error sementara, misalnya
        // ketika lokasi partikel tidak tersedia.
      }
    }
  }
}, INTERVAL_TICKS);
