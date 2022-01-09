import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 130rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 40rem;
  margin: 0 auto;
  border: #f231a5 solid 2px;
  background-color: #fff8f3;
  border-radius: 5px;
  padding: 0.8rem;

  svg {
    color: #072227;
  }
`
export const ContainerProgressBar = styled.div``

export const Player = styled.div`
  display: flex;

  h3 {
    color: #072227;
  }
`

type ProgressBarProps = {
  size: string
}

export const ProgressBar = styled.div<ProgressBarProps>`
  ${({ size }) => css`
    flex: 1;
    position: relative;
    margin-left: 0.4rem;
    margin-right: 0.4rem;

    input[type='range'] {
      appearance: none;
      border-radius: 1rem;
      background: #d3dedc;
      height: 4px;
      outline: none;
      position: relative;
      top: 0;
      width: 100%;
      z-index: 1;
      cursor: pointer;

      &::before {
        background: #f231a5;
        content: '';
        cursor: pointer;
        height: 4px;
        left: 0;
        position: absolute;
        top: 0;
        width: ${size};
        z-index: 2;
      }

      &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #d3dedc left top no-repeat;
      }

      &::-moz-range-progress {
        background-color: #f231a5;
        height: 4px;
      }

      &::-moz-range-thumb {
        width: 1.5rem;
        height: 1.5rem;
        z-index: 3;
        border-radius: 50%;
        appearance: none;
        background-color: #f231a5;
        position: relative;
        top: 0;
        transform: scale(1.2, 1.1);
        cursor: pointer;
      }

      &::-webkit-slider-thumb {
        width: 1.5rem;
        height: 1.5rem;
        z-index: 3;
        border-radius: 50%;
        appearance: none;
        background-color: #f231a5;
        position: relative;
        top: 0;
        transform: scale(1.2, 1.1);
        cursor: pointer;
      }
    }
  `}
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 2.5rem;
    padding: 0 0.2rem;
    font-size: 1.2rem;
    font-weight: 300;
    cursor: pointer;

    &:hover {
      animation: is-color 0.3s ease-in-out;
      animation-fill-mode: forwards;
      @keyframes is-color {
        to {
          color: #f231a5;
        }
      }
      svg {
        animation: is-color 0.3s ease-in-out;
        animation-fill-mode: forwards;
        @keyframes is-color {
          to {
            color: #f231a5;
          }
        }
      }
    }
  }
`

type VolumeProps = {
  volumeSize: string
}

export const Volume = styled.div<VolumeProps>`
  ${({ volumeSize }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    input[type='range'] {
      -webkit-appearance: none;
      border-radius: 1rem;
      background: #d3dedc;
      height: 4px;
      outline: none;
      position: relative;
      top: 0;
      width: 50%;
      z-index: 1;
      cursor: pointer;

      &::before {
        background: #f231a5;
        content: '';
        cursor: pointer;
        height: 4px;
        left: 0;
        position: absolute;
        top: 0;
        width: ${volumeSize};
        z-index: 2;
      }

      &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #d3dedc left top no-repeat;
      }

      &::-moz-range-progress {
        background-color: #f231a5;
        height: 4px;
      }

      &::-moz-range-thumb {
        width: 1.5rem;
        height: 1.5rem;
        z-index: 3;
        border-radius: 50%;
        appearance: none;
        background-color: #f231a5;
        position: relative;
        top: 0;
        transform: scale(1.2, 1.1);
        cursor: pointer;
      }

      &::-webkit-slider-thumb {
        width: 1.5rem;
        height: 1.5rem;
        z-index: 3;
        border-radius: 50%;
        appearance: none;
        background-color: #f231a5;
        position: relative;
        top: 0;
        transform: scale(1.2, 1.1);
        cursor: pointer;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 2.5rem;
      margin-right: 0.4rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        svg {
          animation: is-color 0.3s ease-in-out;
          animation-fill-mode: forwards;
          @keyframes is-color {
            to {
              color: #f231a5;
            }
          }
        }
      }
    }
  `}
`
