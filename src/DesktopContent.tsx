import React from "react";

export default function DesktopContent(): JSX.Element {
  return (
    <div className="desktop-content">
      <div className="header">
        <h1>
          Please change the layout to mobile to see the content.
        </h1>
      </div>
      <div className="text-center text-gray-600 mt-4">
        <p>
          Hint: Resize the browser window or use a mobile device to view this
          content.
        </p>
      </div>
    </div>
  );
}
