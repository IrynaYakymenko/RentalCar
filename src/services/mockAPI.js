export const sendReservation = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;
      if (shouldFail) {
        reject(new Error("Network error: unable to send reservation"));
      } else {
        console.log("Booking form sent:", data);
        resolve({ status: 200, message: "ok" });
      }
    }, 1000);
  });
};
