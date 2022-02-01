import React, { useEffect, useState } from "react";

function AsyncComponent() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {!isButtonInvisible && <button>Button</button>}
    </div>
  );
}

export { AsyncComponent };