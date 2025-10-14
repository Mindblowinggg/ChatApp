import { useEffect, useRef } from "react";

function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", HandleClickOutside);
    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
