const updateDeviceAsync = async (body) => {
  try {
    const response = await fetch("http://localhost:3000/api/devices", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { updateDeviceAsync };


