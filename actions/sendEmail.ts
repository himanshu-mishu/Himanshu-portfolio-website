"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend("re_3qPrE1tf_KkxcEvhBfQSgw62PU3AppEK1");



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  // console.log("running on server");
  //console.log(formData.get("senderEmail"));
  // console.log(formData.get("message"));
let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "himanshu.agrl111@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      //text: message as string,
     react : React.createElement(ContactFormEmail,{message :message as string, senderEmail:senderEmail as string})
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return{data,};
};
