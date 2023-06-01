import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  fallbackValue: any,
  readOnly?: boolean
) {
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key) || null;
    console.log(stored);
    setValue(stored ? stored : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    if (!readOnly) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, readOnly]);

  return value;
}
