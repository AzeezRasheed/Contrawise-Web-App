import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T, readOnly?: boolean) {
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    if (!readOnly) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, readOnly]);

  return value;
}
