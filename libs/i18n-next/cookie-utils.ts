export function setCookie(key: string, value: string) {
  if (isClientSide()) {
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; Secure; SameSite=Lax; path=/`;
  }
}

export function getCookie(key: string) {
  if (isClientSide()) {
    const cookies = document.cookie ? document.cookie.split("; ") : [];
    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      const cookieKey = decodeURIComponent(parts[0]);

      if (cookieKey === key) {
        const cookieValue = parts.slice(1).join("=");
        return decodeURIComponent(cookieValue);
      }
    }
  }
}

export function removeCookie(key: string) {
  if (isClientSide()) {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax; path=/`;
  }
}

export const isClientSide = () => typeof window !== "undefined";
