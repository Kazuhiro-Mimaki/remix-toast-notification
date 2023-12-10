import { useActionData } from "@remix-run/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { useContext, useEffect } from "react";
import { ToastContext } from "~/context/toast/toast";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("name");
  return json({ data: name as string });
}

export default function Index() {
  const data = useActionData<typeof action>();
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    if (data?.data) {
      showToast(`Child page: ${data.data}`);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [data?.data]);

  return (
    <>
      <p>Child page</p>

      <form method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
