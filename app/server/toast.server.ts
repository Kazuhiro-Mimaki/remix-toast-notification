import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: "toast",
  },
});

export const putToast = async (toast: string, headers = new Headers()) => {
  const session = await getSession();
  session.flash("toast", toast);
  headers.set("Set-Cookie", await commitSession(session));
  return headers;
};

export const popToast = async (request: Request, headers = new Headers()) => {
  const session = await getSession(request.headers.get("Cookie"));
  const toast = session.get("toast") as string | null;
  headers.set("Set-Cookie", await commitSession(session));
  return { toast, headers };
};
