import type { VimeoQuality } from './video'

export interface VimeoPlayer {
  destroy: () => void
  getDuration: () => Promise<number>
  getQualities: () => Promise<{ id: VimeoQuality }[]>
  on: (event: string, callback: (data: any) => void) => void
  off: (event: string, callback: (data: any) => void) => void
  play: () => Promise<void>
  pause: () => Promise<void>
  setCurrentTime: (time: number) => Promise<number>
  setVolume: (volume: number) => Promise<number>
  setQuality: (quality: VimeoQuality) => Promise<string>
}

export interface VimeoTimeUpdateData {
  seconds: number
} 