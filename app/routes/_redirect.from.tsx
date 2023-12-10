import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { putToast } from "~/server/toast.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("name") as string;

  const headers = await putToast(name);

  return redirect("/to", { headers });
}

export default function Index() {
  return (
    <>
      <p>Submit and redirect "/to"</p>

      <form method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
