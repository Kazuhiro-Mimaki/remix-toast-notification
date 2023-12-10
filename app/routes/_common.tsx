import { Outlet } from "@remix-run/react";

import { ToastProvider } from "~/context/toast";
import styles from "../styles/common.module.css";

export default function Index() {
  return (
    <ToastProvider>
      <div
        className={styles.container}
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      >
        <Outlet />
      </div>
    </ToastProvider>
  );
}
