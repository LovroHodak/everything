// testUsers
export async function getTestUsers() {
  const response = await fetch("http://localhost:5000/api/testusers");

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

export async function addTestUser(testUser) {
  const response = await fetch("http://localhost:5000/api/addTestUser", {
    method: "POST",
    body: JSON.stringify(testUser),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}
