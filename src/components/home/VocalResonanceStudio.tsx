'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Volume2, VolumeX, Sparkles, Play, Pause, Activity, Mic2, Music } from 'lucide-react'

interface VocalNote {
  note: string
  nameVi: string
  freq: number
  register: 'chest' | 'mix' | 'head'
  registerLabel: string
  tag: string
}

const VOCAL_NOTES: VocalNote[] = [
  { note: 'C3', nameVi: 'Đô trầm', freq: 130.81, register: 'chest', registerLabel: 'Giọng Ngực (Chest)', tag: 'Vững trụ hơi' },
  { note: 'E3', nameVi: 'Mi trầm', freq: 164.81, register: 'chest', registerLabel: 'Giọng Ngực (Chest)', tag: 'Dày ấm' },
  { note: 'G3', nameVi: 'Sol trung', freq: 196.00, register: 'chest', registerLabel: 'Cầu nối (Bridge)', tag: 'Mở khẩu hình' },
  { note: 'C4', nameVi: 'Đô trung', freq: 261.63, register: 'mix', registerLabel: 'Giọng Pha (Mix Voice)', tag: 'Xuyên thấu' },
  { note: 'E4', nameVi: 'Mi cao', freq: 329.63, register: 'mix', registerLabel: 'Giọng Pha (Mix Voice)', tag: 'Bay bổng' },
  { note: 'G4', nameVi: 'Sol cao', freq: 392.00, register: 'head', registerLabel: 'Giọng Đầu (Head Voice)', tag: 'Sáng vang' },
  { note: 'C5', nameVi: 'Đố cao', freq: 523.25, register: 'head', registerLabel: 'Giọng Đầu (Head Voice)', tag: 'Đỉnh cao' },
]

const FOCUS_PRESETS = [
  {
    id: 'breath',
    label: 'Cột Hơi & Nén Khí',
    targetNote: 'C3',
    tip: 'Lấy hơi sâu đáy phổi, hạ cơ hoành, phát âm từ gốc xương chậu không gồng cổ.',
  },
  {
    id: 'mix',
    label: 'Mở Rộng Mix Voice',
    targetNote: 'C4',
    tip: 'Pha trộn 50% rung ngực và 50% cộng minh xoang mặt, vượt ngưỡng bẻ giọng êm ái.',
  },
  {
    id: 'resonance',
    label: 'Vang Sáng Head Voice',
    targetNote: 'G4',
    tip: 'Nhấc nhẹ hàm ếch mềm (soft palate), đưa âm thanh xoáy vào vòm trán không nghẹt mũi.',
  },
]

export default function VocalResonanceStudio() {
  const [activeNote, setActiveNote] = useState<VocalNote>(VOCAL_NOTES[3])
  const [isAudioMuted, setIsAudioMuted] = useState(false)
  const [isPlayingArpeggio, setIsPlayingArpeggio] = useState(false)
  const [activePreset, setActivePreset] = useState<string>('mix')
  const [soundEnergy, setSoundEnergy] = useState<number>(30)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const arpeggioTimeoutsRef = useRef<NodeJS.Timeout[]>([])

  // Synthesize rich, warm acoustic vocal harmonic sound
  const playTone = useCallback((freq: number, duration = 0.8) => {
    if (isAudioMuted) return

    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtxClass) return

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass()
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }

      const ctx = audioCtxRef.current
      const now = ctx.currentTime

      // Master gain node
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0.001, now)
      masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.06)
      masterGain.gain.exponentialRampToValueAtTime(0.18, now + duration * 0.4)
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

      // Low-pass filter for warm acoustic formant
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(Math.min(freq * 3.5, 2200), now)
      filter.Q.setValueAtTime(3.5, now)

      // Fundamental oscillator (sine)
      const osc1 = ctx.createOscillator()
      osc1.type = 'sine'
      osc1.frequency.setValueAtTime(freq, now)

      // First harmonic overtone (triangle) for vocal body
      const osc2 = ctx.createOscillator()
      osc2.type = 'triangle'
      osc2.frequency.setValueAtTime(freq * 2, now)

      const osc2Gain = ctx.createGain()
      osc2Gain.gain.setValueAtTime(0.12, now)

      // Sub-harmonic shimmer
      const osc3 = ctx.createOscillator()
      osc3.type = 'sine'
      osc3.frequency.setValueAtTime(freq * 3, now)

      const osc3Gain = ctx.createGain()
      osc3Gain.gain.setValueAtTime(0.05, now)

      // Connections
      osc1.connect(masterGain)
      osc2.connect(osc2Gain)
      osc2Gain.connect(masterGain)
      osc3.connect(osc3Gain)
      osc3Gain.connect(masterGain)

      masterGain.connect(filter)
      filter.connect(ctx.destination)

      osc1.start(now)
      osc2.start(now)
      osc3.start(now)

      osc1.stop(now + duration + 0.05)
      osc2.stop(now + duration + 0.05)
      osc3.stop(now + duration + 0.05)

      setSoundEnergy(85)
      setTimeout(() => setSoundEnergy(45), 350)
      setTimeout(() => setSoundEnergy(20), 800)
    } catch {
      // Audio not permitted or supported silently ignored
    }
  }, [isAudioMuted])

  const handleSelectNote = (noteObj: VocalNote) => {
    setActiveNote(noteObj)
    playTone(noteObj.freq, 0.9)
  }

  // Play ascending & descending arpeggio vocal warmup
  const startArpeggio = () => {
    if (isPlayingArpeggio) {
      stopArpeggio()
      return
    }

    setIsPlayingArpeggio(true)
    const sequence = [...VOCAL_NOTES, ...[...VOCAL_NOTES].reverse().slice(1)]
    const stepDelay = 320

    sequence.forEach((noteItem, idx) => {
      const timer = setTimeout(() => {
        setActiveNote(noteItem)
        playTone(noteItem.freq, 0.4)
        if (idx === sequence.length - 1) {
          setIsPlayingArpeggio(false)
        }
      }, idx * stepDelay)
      arpeggioTimeoutsRef.current.push(timer)
    })
  }

  const stopArpeggio = () => {
    arpeggioTimeoutsRef.current.forEach(t => clearTimeout(t))
    arpeggioTimeoutsRef.current = []
    setIsPlayingArpeggio(false)
  }

  useEffect(() => {
    return () => {
      stopArpeggio()
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close()
      }
    }
  }, [])

  // Canvas waveform animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let phase = 0

    const render = () => {
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)

      // Frequency waves based on activeNote
      const freqFactor = (activeNote.freq / 261.63) * 3
      const amplitude = Math.max(12, (soundEnergy / 100) * 38)

      // Primary golden wave
      ctx.beginPath()
      ctx.lineWidth = 2.5
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.15)')
      gradient.addColorStop(0.5, '#FFD700')
      gradient.addColorStop(1, 'rgba(255, 229, 92, 0.2)')
      ctx.strokeStyle = gradient

      for (let x = 0; x < width; x++) {
        const y = height / 2 +
          Math.sin(x * 0.035 * (freqFactor * 0.5) + phase) * (amplitude * 0.7) +
          Math.sin(x * 0.07 + phase * 1.5) * (amplitude * 0.3)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Secondary subtle harmonic wave
      ctx.beginPath()
      ctx.lineWidth = 1.2
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)'
      for (let x = 0; x < width; x++) {
        const y = height / 2 +
          Math.sin(x * 0.02 * freqFactor - phase * 0.8) * (amplitude * 0.45)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Center reference hairline
      ctx.beginPath()
      ctx.lineWidth = 0.8
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.12)'
      ctx.moveTo(0, height / 2)
      ctx.lineTo(width, height / 2)
      ctx.stroke()

      phase += 0.065
      animFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [activeNote, soundEnergy])

  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary/10 rounded-3xl blur-xl opacity-75"></div>

      {/* Main Console Box */}
      <div className="relative bg-[#111111]/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Subtle top light bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

        {/* Console Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-primary uppercase flex items-center gap-1.5">
                <Mic2 className="w-3.5 h-3.5" />
                Vocal Resonance Studio
              </span>
              <p className="text-[11px] text-gray-400">Kiểm âm tần số & Vùng cữ giọng</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAudioMuted(!isAudioMuted)}
              aria-label={isAudioMuted ? 'Bật âm thanh mẫu' : 'Tắt âm thanh'}
              className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-primary transition-all duration-200 border border-white/10"
              title={isAudioMuted ? 'Bật âm' : 'Tắt âm'}
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-primary" />}
            </button>
            <button
              onClick={startArpeggio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                isPlayingArpeggio
                  ? 'bg-primary text-secondary border-primary shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  : 'bg-white/5 hover:bg-primary/20 text-primary border-primary/30'
              }`}
            >
              {isPlayingArpeggio ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  Dừng
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Chạy Thang Âm
                </>
              )}
            </button>
          </div>
        </div>

        {/* Central Display: Pitch, Frequency, Register */}
        <div className="my-5 p-4 rounded-xl bg-[#0a0a0a] border border-primary/20 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Note & Pitch */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 flex items-center justify-center shadow-inner">
                <span className="text-3xl font-extrabold text-primary font-mono tracking-tight">
                  {activeNote.note}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {activeNote.nameVi}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                    {activeNote.tag}
                  </span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Tần số dao động: <span className="text-primary font-semibold">{activeNote.freq} Hz</span>
                </p>
              </div>
            </div>

            {/* Vocal Register Badge */}
            <div className="text-right">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Kỹ thuật âm cữ</div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activeNote.register === 'chest'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : activeNote.register === 'mix'
                  ? 'bg-primary/25 text-primary border border-primary/50 shadow-[0_0_12px_rgba(255,215,0,0.3)]'
                  : 'bg-yellow-300/20 text-yellow-200 border border-yellow-300/40'
              }`}>
                {activeNote.registerLabel}
              </span>
            </div>
          </div>

          {/* Waveform Canvas */}
          <div className="mt-4 relative h-20 w-full rounded-lg bg-[#050505] overflow-hidden border border-white/5">
            <canvas
              ref={canvasRef}
              width={500}
              height={80}
              className="w-full h-full block"
            />
            <div className="absolute top-1.5 left-2.5 flex items-center gap-1 text-[10px] text-gray-500 font-mono">
              <Activity className="w-3 h-3 text-primary" />
              <span>Cộng hưởng sóng hài (Harmonic Formants)</span>
            </div>
          </div>
        </div>

        {/* Interactive Keyboard / Pitch Selectors */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs text-gray-400 px-1">
            <span className="flex items-center gap-1 text-gray-300 font-medium">
              <Music className="w-3.5 h-3.5 text-primary" />
              Chạm vào nốt để nghe mẫu thanh nhạc:
            </span>
            <span className="text-[11px] text-primary/80 hidden sm:inline">Chuẩn cao độ Solfège</span>
          </div>

          {/* 7 Note Buttons */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {VOCAL_NOTES.map((item) => {
              const isSelected = activeNote.note === item.note
              return (
                <button
                  key={item.note}
                  onClick={() => handleSelectNote(item)}
                  className={`group relative flex flex-col items-center justify-between py-3 px-1 rounded-xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-b from-primary via-primary-light to-primary text-secondary font-bold shadow-[0_0_18px_rgba(255,215,0,0.5)] transform -translate-y-1'
                      : 'bg-[#181818] hover:bg-[#252525] text-gray-200 border border-white/10 hover:border-primary/40'
                  }`}
                >
                  <span className={`text-[10px] sm:text-xs font-semibold ${isSelected ? 'text-secondary/80' : 'text-gray-400 group-hover:text-primary'}`}>
                    {item.nameVi.split(' ')[0]}
                  </span>
                  <span className={`text-sm sm:text-base font-extrabold font-mono my-0.5 ${isSelected ? 'text-secondary' : 'text-white'}`}>
                    {item.note}
                  </span>
                  <span className={`text-[9px] font-mono opacity-70 ${isSelected ? 'text-secondary' : 'text-gray-500'}`}>
                    {Math.round(item.freq)}Hz
                  </span>
                  {isSelected && (
                    <div className="absolute -bottom-1 w-2 h-1 bg-primary rounded-full blur-[1px]"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Focus Technique Selector */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-gray-300">Phương pháp khắc phục cấp tốc:</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {FOCUS_PRESETS.map((preset) => {
              const isCurrent = activePreset === preset.id
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setActivePreset(preset.id)
                    const target = VOCAL_NOTES.find(n => n.note === preset.targetNote)
                    if (target) handleSelectNote(target)
                  }}
                  className={`px-2 py-2 rounded-lg text-left text-[11px] font-medium leading-tight transition-all duration-200 ${
                    isCurrent
                      ? 'bg-primary/20 border border-primary text-primary shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5'
                  }`}
                >
                  <div className="font-semibold">{preset.label}</div>
                </button>
              )
            })}
          </div>
          <p className="mt-2 text-[11px] text-gray-400 italic bg-black/40 p-2.5 rounded-lg border border-white/5">
            💡 <span className="text-primary font-medium">Bí quyết của Thầy Kiên:</span> {
              FOCUS_PRESETS.find(p => p.id === activePreset)?.tip
            }
          </p>
        </div>

      </div>
    </div>
  )
}
