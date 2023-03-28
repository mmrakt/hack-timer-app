import { createContext, useState } from 'react'
import ThemeProvider from '../components/ThemeProvider'
import TimerContainer from '../components/timer/TimerContainer'
import { DEFAULT_POPUP_PAGE_TYPE } from '@hack-timer/common/config/index'
import { PageType } from '@hack-timer/common/types'
import HistoryContainer from './History'
import SettingsContainer from './Settings'

export const DisplayPageContext = createContext<any>(null)

const Popup: React.FC = () => {
  const [displayPageType, setDisplayPageType] = useState<PageType>(
    DEFAULT_POPUP_PAGE_TYPE
  )
  return (
    <ThemeProvider>
      <DisplayPageContext.Provider value={{ setDisplayPageType }}>
        <div className="p-3 base-color border-2 dark:border-gray-700 text-color w-[25rem]">
          {displayPageType === 'timer' ? (
            <TimerContainer />
          ) : displayPageType === 'history' ? (
            <HistoryContainer />
          ) : displayPageType === 'settings' ? (
            <SettingsContainer />
          ) : (
            <p>loading</p>
          )}
        </div>
      </DisplayPageContext.Provider>
    </ThemeProvider>
  )
}

export default Popup
