import type { VimeoQuality } from './video'

export interface VimeoTimeUpdateData {
  seconds: number
}

export interface VimeoEventData {
  timeupdate: VimeoTimeUpdateData
  play: void
  pause: void
  progress: { percent: number }
  seeking: { seconds: number }
  seeked: { seconds: number }
  error: { name: string; message: string }
  ended: void
  volumechange: { volume: number }
  loaded: void
  bufferstart: void
  bufferend: void
}

export interface VimeoPlayer {
  destroy: () => void
  getDuration: () => Promise<number>
  getQualities: () => Promise<{ id: VimeoQuality }[]>
  on: <T extends keyof VimeoEventData>(
    event: T,
    callback: (data: VimeoEventData[T]) => void
  ) => void
  off: <T extends keyof VimeoEventData>(
    event: T,
    callback: (data: VimeoEventData[T]) => void
  ) => void
  play: () => Promise<void>
  pause: () => Promise<void>
  setCurrentTime: (time: number) => Promise<number>
  setVolume: (volume: number) => Promise<number>
  setQuality: (quality: VimeoQuality) => Promise<string>
} 