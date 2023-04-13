import "@styles/globals.css";
import { AwsRum } from "aws-rum-web";

function Application({ Component, pageProps }) {
  try {
    const config = {
      sessionSampleRate: 1,
      guestRoleArn:
        "arn:aws:iam::269511801252:role/RUM-Monitor-us-west-2-269511801252-2479131311761-Unauth",
      identityPoolId: "us-west-2:d1a4a0f9-686d-4fa6-8375-b289b399824b",
      endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
      telemetries: ["performance", "errors", "http"],
      allowCookies: true,
      enableXRay: true,
    };

    const APPLICATION_ID = "d99b333b-f222-4389-a482-fd63c4e729b2";
    const APPLICATION_VERSION = "1.0.0";
    const APPLICATION_REGION = "us-west-2";

    const awsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
  return <Component {...pageProps} />;
}

export default Application;
