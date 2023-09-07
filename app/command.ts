import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Locale from "./locales";

type Command = (param: string) => void;
interface Commands {
  fill?: Command;
  submit?: Command;
  mask?: Command;
}

export function useCommand(commands: Commands = {}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let shouldUpdate = false;
    searchParams.forEach((param, name) => {
      const commandName = name as keyof Commands;
      if (typeof commands[commandName] === "function") {
        commands[commandName]!(param);
        searchParams.delete(name);
        shouldUpdate = true;
      }
    });

    if (shouldUpdate) {
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, commands]);
}
