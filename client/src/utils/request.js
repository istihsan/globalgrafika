const BASE_URL = "https://globalgrafikabe.onrender.com";

export const get = async endpoint => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const post = async (url, body, type) => {
  const isMultipartFormData = type === "MULTIPART_FORM_DATA";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: body
      // ...(isMultipartFormData ? body : { body }),
      // headers: {
      //   "Content-Type": isMultipartFormData
      //     ? "multipart/form-data"
      //     : "application/json"
      // }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const del = async url => {
  try {
    await fetch(url, {
      method: "DELETE"
    });
  } catch (error) {
    throw error;
  }
};

export const patch = async (url, body) => {
  try {
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  } catch (error) {
    throw error;
  }
};

export const put = async (url, body) => {
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  } catch (error) {
    throw error;
  }
};
