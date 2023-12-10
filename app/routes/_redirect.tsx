import { Outlet, useLoaderData } from "@remix-run/react";
import { json, type LoaderFunction } from "@remix-run/node";
import styles from "../styles/common.module.css";
import { Toast } from "~/components/toast";
import { popToast } from "~/server/toast.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { toast, headers } = await popToast(request);

  return json({ toast }, { headers });
};

export default function Index() {
  const { toast } = useLoaderData<typeof loader>();

  return (
    <>
      {toast && <Toast message={toast} />}
      <div
        className={styles.container}
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      >
        <Outlet />
      </div>
    </>
  );
}
