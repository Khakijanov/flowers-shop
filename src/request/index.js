import { BASE_URL } from "../lib/utils";

export const login = async (data) => {
  const res = await fetch(BASE_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200 || res.status === 201) {
    return await res.json();
  } else if (res.status === 400) {
    throw new Error("Login yoki Parol hato kiritildi");
  } else {
    throw new Error("Nimadir xatolik bo'ldi");
  }
};

export const getFlowers = async (token) => {
  const res = await fetch(BASE_URL + "/gullar", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200 || res.status === 201) {
    await res.json();
  } else {
    throw new Error("Nimadir xatolik bo'ldi");
  }

  console.log(res);
};
