import database from "../models/index";

export const createMail = async (data: any) => {
  try {
    const mail = database.Sendmail.create({
      id          :data.id,
      userName    :data.userName,
      email       : data.email,
      user_query  :data.user_query, 
      subject     :data.subject,

    });
    
    return mail;
  } catch (error: any) {
    console.error("Error creating mail:", error);
    return false;
  }
};