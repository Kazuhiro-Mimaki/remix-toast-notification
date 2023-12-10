import { useActionData } from "@remix-run/react";
import styles from "../styles/single.module.css";
import {
  json,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Toast } from "~/components/toast";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("name");
  return json({ data: name as string });
}

export default function Index() {
  const data = useActionData<typeof action>();

  return (
    <>
      {data && <Toast message={data.data} />}
      <div
        className={styles.container}
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      >
        <form method="POST">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
