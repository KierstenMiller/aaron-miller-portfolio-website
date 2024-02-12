import { useState } from 'react'

import defaultStyles from 'app/components/modals/default-modals-styling.module.scss'
import { inclusiveClickEventT, mouseClickT } from 'app/components/util/interaction-typing'
import { sassStylesI } from 'app/components/util/typing-util'
import { Modal, ModalI, modalToggleCallbackT } from '../modal/modal'

interface ModalTriggerI {
  triggerConfig: {
    text: string | React.ReactNode
    openCallback?: modalToggleCallbackT
  }
  modalConfig: Omit<ModalI, 'closeCallback'> & {
    closeCallback?: modalToggleCallbackT
  }
  // optional
  testId?: string // made optional to prevent DOM bloat
  isGlobal?: boolean
  stylesOverride?: sassStylesI
}

export const ModalTrigger = ({ triggerConfig, modalConfig, testId, isGlobal = true, stylesOverride = {} }: ModalTriggerI) => {
  const [isOpen, setIsOpen] = useState(false)
  const styles = { ...defaultStyles, ...stylesOverride }
  const toggle = (openModal: boolean, event: inclusiveClickEventT, callback?: modalToggleCallbackT) => {
    setIsOpen(openModal)
    callback && callback(event, openModal)
  }
  const closeOnClick: modalToggleCallbackT = (event) => { toggle(false, event, modalConfig.closeCallback) }
  const openOnClick = (event: mouseClickT) => { toggle(true, event, triggerConfig.openCallback) }
  return <>
    {isOpen && <Modal {...modalConfig} testId={testId} isGlobal={isGlobal} closeCallback={closeOnClick} stylesOverride={stylesOverride} />}
    <button
      className={styles.trigger}
      onClick={openOnClick}
      {...testId && { 'data-testid': `${testId}-trigger` }}
    >
        {triggerConfig.text}
    </button>
  </>
}
