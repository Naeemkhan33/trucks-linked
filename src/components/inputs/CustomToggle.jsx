import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomToggle({ label, textOnLeft }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group
      as="div"
      className={`${textOnLeft && "flex items-center gap-3 mb-2"}`}
    >
      {label && (
        <Switch.Label
          as="label"
          className={`${textOnLeft ? "mr-auto" : "block mb-4"}`}
        >
          <span className="block font-medium text-bodyText capitalize line-clamp-1">
            {label}
          </span>
        </Switch.Label>
      )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-primary border-primary" : "bg-white border-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5 bg-white" : "translate-x-0 bg-gray-200",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
