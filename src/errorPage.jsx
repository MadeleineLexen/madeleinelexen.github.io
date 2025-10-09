import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  let messageText  ="";

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      messageText = "Hmm, seems you aren't allowed to be here..."
    } else if (error.status === 404) {
      messageText = "Looks like there's nothing here..."
    }

    return (
      <div id="error-page">
        <h1>{"Oops!"}</h1>
        <p>{messageText}</p>
        {(error.data?.message || error.statusText) && (
          <p>
            <i>{error.statusText || error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}
