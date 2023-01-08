import axios from "axios";

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if (token) {
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
}

export const postUser = async (form) => {
  try {
    const result = await axios.post("users", {
      ...form,
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (form) => {
  const result = await axios.post("users/login", {
    ...form,
  });

  const token = result.data.data.token;

  window.localStorage.axios.defaults.headers.Authorization = `Bearer ${token}`;

  return true;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get("users/current");
  return data;
};

export const patchProfile = (form) => {
  return axios.patch("users/profile", form);
};

export const postPost = (form) => {
  return axios.post("posts", form);
};

export const getPosts = async (page = 1) => {
  const { data } = await axios.get(`/posts?page=${page}`);
  return data.data;
};

export const getPostById = async (id) => {
  const { data } = await axios.get("/posts/" + id);

  return data;
};

export const getComments = async (postId, page = 1) => {
  const { data } = await axios.get("/comments", {
    params: {
      page,
      postId,
    },
  });

  console.log(data);
};

export const postComment = async (form) => {
  axios
    .post(`/comments?postId=${form.postId}&content=${form.content}`)
    .then((res) => console.log(res));
};

export const deleteComment = async (postId) => {
  const { data } = await axios.delete(`/comments/${postId}`);

  return data;
};

export const converUrl = async (url) => {
  const res = await fetch(url);
  const data = await res.blob();
  const ext = url.split(".").pop();
  const filename = url.split("/").pop();
  const metadata = { type: `image/${ext}` };

  return new File([data], filename, metadata);
};
