import axios from "axios";

const fetchApi = axios.create({
  baseURL: "https://6391d5f0b750c8d178ceda18.mockapi.io/",
});

export const getUsers = async ({ page }) => {
  const { data } = await fetchApi.get(`users?&page=${page}&limit=8`);

  return data;
};
export const getFilteredUsers = async ({ page, isFollowing }) => {
  const { data } = await fetchApi.get(
    `users?isFollowing=${isFollowing}&page=${page}&limit=8`
  );

  return data;
};

export const patchFollow = async (id, params) => {
  const { data } = await fetchApi.put(`users/${id}`, { ...params });

  return data;
};
