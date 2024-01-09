export const get = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const post = async (url, body) => {
  try {
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
  } catch (error) {
    throw error;
  }
};
