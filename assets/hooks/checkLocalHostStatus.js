/**
 *
 *  This is the checkLocalHostStatus hook
 *
 */

import { useState, useEffect } from "react";

const checkLocalHostStatus = () => {
  const [onLocalHost, setOnLocalHost] = useState(null);

  useEffect(() => {
    const IS_LOCAL_HOST =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    setOnLocalHost(IS_LOCAL_HOST);

    if (onLocalHost !== null) {
      console.log("The user is on LocalHost");
    }
  }, []);

  return { onLocalHost };
};

export default checkLocalHostStatus;
