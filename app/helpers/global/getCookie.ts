export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }

  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}
