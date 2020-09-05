import { Wall } from 'domain/wall/types'
import { wallService } from 'services/wall'

export async function getWall(): Promise<Wall> {
  const wall = await wallService.get()
  return wall
}
