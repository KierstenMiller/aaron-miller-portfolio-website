'use client'


import classNames from "classnames";
import styles from "./work-switch.module.scss";

interface props {
  isWorkMode: boolean;
  setIsWorkMode: (isOpen: boolean) => void;
}

export const Switch = ({ isWorkMode, setIsWorkMode }: props) => {

  return <fieldset className={classNames(styles['switch-container'], { [styles['is-work']] : isWorkMode })}>
    <legend className="sr-only">Project View</legend>
    <span className={styles["highlight"]}/>
    <button
      className={classNames(styles['switch-button'], styles['work-button'])}
      type="button"
      id="b01s"
      aria-checked={isWorkMode === true}
      role="switch"
      onClick={() => setIsWorkMode(true)}
    >
      Work
    </button>
    <button
    className={classNames(styles['switch-button'], styles['not-work-button'])}
      type="button"
      id="b02s"
      aria-checked={isWorkMode !== true}
      role="switch"
      onClick={() => setIsWorkMode(false)}
    >
      Not Work
    </button>
  </fieldset>
}
