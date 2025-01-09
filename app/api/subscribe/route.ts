/* eslint-disable @typescript-eslint/no-explicit-any */
// docs: https://mailchimp.com/developer/marketing/guides/quick-start/
import mailchimp from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp API
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us20", // e.g., us6
});

const audienceId = "23781ada08";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      //   status: "subscribed", // Use 'pending' for double opt-in
      status: "pending", // Use 'pending' for double opt-in
    });

    return Response.json({
      status: "success",
      message: "Please check your email to confirm the subscription",
    });
  } catch (err) {
    if ((err as any).status === 400) {
      return Response.json({
        status: "error",
        message: "Already subscribed",
      });
    }
  }
}
