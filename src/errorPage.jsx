import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./errorPage.css";

export function ErrorPage() {
  const error = useRouteError();
  let messageText = "";

  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      messageText = "Hmm, that request didn't quite make sense. Want to try again?";
    } else if (error.status === 401) {
      messageText = "Hmm, seems you aren't allowed to be here...";
    } else if (error.status === 403) {
      messageText = "This page is off-limits! But I appreciate your curiosity";
    } else if (error.status === 404) {
      messageText = "Looks like this page doesn't exist. Maybe I forgot to build it?";
    } else if (error.status === 418) {
      messageText = "I'm a teapot. (Yes, this is a real error code.)";
    } else if (error.status === 500) {
      messageText = "Oops! Something broke on my end. Don't worry, it's not you, it's me";
    } else if (error.status === 503) {
      messageText = "Taking a quick coffee break ☕ Be right back!";
    } else {
      messageText = "Well, this is awkward. Something unexpected happened.";
    }

    return (
      <div id="error-page">
        <h1>{"Oops!"}</h1>
        <p>{messageText}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Well, that's embarrassing.</h1>
        <p>Something unexpected happened, and honestly, I'm not sure what.</p>
        <p>Try refreshing? Or come back in a bit.</p>
      </div>
    );
  } else {
    return <></>;
  }
}
