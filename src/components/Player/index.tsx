import * as S from './style'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVolume, setIsVolume] = useState(true)
  const [duration, setDuration] = useState(0)
  const [mediaTime, setMediaTime] = useState(0)
  const [volume, setVolume] = useState(0)
  const [size, setSize] = useState('')
  const [volumeSize, setVolumeSize] = useState('')
  const ref = useRef<HTMLAudioElement>(null)
  const toggle = () => {
    setIsPlaying(!isPlaying)

    const audioPlayer = ref.current
    isPlaying ? audioPlayer?.pause() : audioPlayer?.play()
  }
  const onLoadedMetadata = () => {
    if (ref.current?.duration) {
      setDuration(Math.floor(ref.current.duration))
    }
  }
  const onTimeUpdate = () => {
    if (ref.current?.currentTime) {
      setMediaTime(Math.floor(ref.current.currentTime))
      setSize(`${(mediaTime / duration) * 100}%`)
    }
  }
  const onScrubber = (event: ChangeEvent<HTMLInputElement>) => {
    const playhead = parseFloat(event.target.value)
    setMediaTime(playhead)
    ref.current!.currentTime = playhead
  }
  const calculateTime = (secs: number) => {
    const seconds = String(Math.floor(secs % 60)).padStart(2, '0')
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0')
    return `${minutes}:${seconds}`
  }
  const onRewind = () => {
    const current = ref.current!.currentTime
    const newTime = Math.max(current - 5, 0)
    setMediaTime(newTime)
    ref.current!.currentTime = newTime
  }
  const onFastForward = () => {
    const current = ref.current!.currentTime
    const newTime = Math.min(current + 5, duration)
    setMediaTime(newTime)
    ref.current!.currentTime = newTime
  }
  const onVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.currentTarget.value)
    setVolume(newVolume)
    setVolumeSize(`${newVolume * 100}%`)
    ref.current!.volume = newVolume
  }
  const onAudio = () => {
    setIsVolume(!isVolume)
    ref.current!.muted = isVolume
  }
  useEffect(() => {
    setVolume(0.5)
    setVolumeSize(`${0.5 * 100}%`)
  }, [])
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerProgressBar>
          <S.Player>
            <h3>{calculateTime(mediaTime)}</h3>
            <S.ProgressBar size={size}>
              <input
                type="range"
                min={0}
                max={duration}
                value={mediaTime}
                onChange={onScrubber}
              />
            </S.ProgressBar>
            <h3>{calculateTime(duration)}</h3>
          </S.Player>
          <S.Buttons>
            <button onClick={onRewind}>
              <BsArrowLeftShort size={20} />
              <h3>5s</h3>
            </button>
            <button onClick={toggle}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={onFastForward}>
              <h3>5s</h3>
              <BsArrowRightShort size={20} />
            </button>
          </S.Buttons>
        </S.ContainerProgressBar>
        <audio
          src="https://res.cloudinary.com/dnlbwgimh/video/upload/v1641531565/Local_Forecast_-_Elevator_dm6eec.mp3"
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          ref={ref}
        ></audio>
        <S.Volume volumeSize={volumeSize}>
          <button onClick={onAudio}>
            {isVolume ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step="0.1"
            value={volume}
            onChange={onVolume}
          />
        </S.Volume>
      </S.Wrapper>
    </S.Container>
  )
}

export default Player
