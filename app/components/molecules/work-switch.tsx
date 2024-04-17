'use client'


import classNames from "classnames";
import styles from "./work-switch.module.scss";

interface props {
  isFun: boolean;
  setIsFun: (isOpen: boolean) => void;
}

export const Switch = ({isFun, setIsFun}: props) => {

  return <fieldset className={classNames(styles['switch-container'], { [styles['isWork']] : isFun })}>
    <legend className="sr-only">Project View</legend>
    <span className={styles["highlight"]}/>
    <button
      className={classNames(styles['switch-button'], styles['work-button'])}
      type="button"
      id="b01s"
      aria-checked={isFun === true}
      role="switch"
      onClick={() => setIsFun(true)}
    >
      Work
    </button>
    <button
    className={classNames(styles['switch-button'], styles['not-work-button'])}
      type="button"
      id="b02s"
      aria-checked={isFun !== true}
      role="switch"
      onClick={() => setIsFun(false)}
    >
      Not Work
    </button>
  </fieldset>
}
