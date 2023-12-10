import styles from "./styles.module.css";

type Props = {
  message?: string;
};

export const Toast = ({ message }: Props) => {
  return <div className={styles.toast}>{message ? message : "No content"}</div>;
};
