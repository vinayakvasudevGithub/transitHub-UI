const handleApiError = (error) => {
  if (error.response) {
    console.error(
      "API Error :",
      error.response.data.message || "something went wrong"
    );

    return {
      success: false,
      status: error.response.status,
      message: error.response.data.message || "An error occurred",
    };
  } else if (error.request) {
    console.error("Network Error:", error.message);
    return {
      success: false,
      status: null,
      message: "No response from server. Please check your network.",
    };
  } else {
    console.error("Unexpected Error:", error.message);
    return {
      success: false,
      status: null,
      message: "Unexpected error occurred. Please try again.",
    };
  }
};

export default handleApiError;
