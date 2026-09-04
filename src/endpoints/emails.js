import { apiRequest } from "../services/api";

export const sendEmail = async ({
  senderEmail,
  senderName,
  subject,
  body,
}) => {
  return apiRequest("/enquiries", {
    method: "POST",
    body: JSON.stringify({
      senderEmail,
      senderName,
      subject,
      body,
    }),
  });
};