// Create a new todo using async/await and POST request
const createTodo = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Failed to create todo:", error);
    return null;
  }
};

// Main function to call createTodo
const mainFunc = async () => {
  const todo = await createTodo();
  console.log("Created TODO:", todo);
};

// Run the function
mainFunc();
