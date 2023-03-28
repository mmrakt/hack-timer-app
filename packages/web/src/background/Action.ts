import { COLOR } from '@hack-timer/common/config/color'
import { Phase } from '@hack-timer/common/types'
import { action } from '../utils/chrome'
import {
  getTimeFromSeconds,
  formatDisplayTime
} from '../utils/timeHelper'

const updateSecondsOfBadge = async (reminingSeconds: number): Promise<void> => {
  const { seconds, minutes } = getTimeFromSeconds(reminingSeconds)
  await action.setBadgeText({
    text: formatDisplayTime(seconds, minutes)
  })
}

const updateColorOfBadge = async (phase: Phase): Promise<void> => {
  const color = phase === 'focus' ? COLOR.primary : COLOR.secondary
  await action.setBadgeBackgroundColor({ color })
}

export { updateColorOfBadge, updateSecondsOfBadge }
