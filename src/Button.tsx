// eslint-disable-next-line no-use-before-define
import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * button type
   */
  type?: "primary" | "secondary" | "tertiary";
  /**
   * text to display on button
   */
  label?: string;

  /**
   * icon position
   */
  iconPos?: "right" | "left";

  /**
   * icon image
   */
  icon?: string;

  /**
   * icon size
   */
  size?: "default" | "large" | "small";

  /**
   * button link
   */
  link?: string;

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string;

  /**
   * force dark mode (This will bypass dark mode and apply the dark mode on the component even in light mode
   */
  forceDark?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  type = "primary",
  label = "Button",
  size = "default",
  icon = "",
  iconPos = "left",
  link = "",
  className = "",
  forceDark = false,
}) => {
  const buttonClasses = ["inline-flex items-center"];
  const lableClasses = [""];
  const iconClasses = ["max-h-full"];

  switch (type) {
    case "primary":
      buttonClasses.push("rounded-lg");
      if (forceDark) {
        buttonClasses.push("bg-primary-400 hover:bg-primary-200");
        buttonClasses.push("text-primary-900");
      } else {
        buttonClasses.push(
          "bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-200"
        );
        buttonClasses.push("text-white dark:text-primary-900");
      }
      break;
    case "secondary":
      buttonClasses.push("bg-none rounded-lg border");
      if (forceDark) {
        buttonClasses.push("border-primary-400 hover:border-primary-200");
        buttonClasses.push("text-primary-400 hover:text-primary-200");
      } else {
        buttonClasses.push(
          "border-primary-600 hover:border-primary-800 dark:border-primary-300  dark:hover:border-primary-100"
        );
        buttonClasses.push(
          "text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100"
        );
      }
      break;
    case "tertiary":
      buttonClasses.push("bg-none");
      if (forceDark) {
        buttonClasses.push("text-primary-400 hover:text-primary-200");
      } else {
        buttonClasses.push(
          "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-200"
        );
      }
      break;
  }
  switch (size) {
    case "small":
      buttonClasses.push("h-8 max-h-8 py-2");
      lableClasses.push("fontStyle-button-sm");
      type !== "tertiary" && buttonClasses.push("px-2.5");
      icon && lableClasses.push(iconPos === "left" ? "ml-2" : "mr-2");

      break;
    case "large":
      buttonClasses.push("h-12 max-h-12 py-3");
      type !== "tertiary" && buttonClasses.push("px-5");
      lableClasses.push("fontStyle-button-lg");
      icon && lableClasses.push(iconPos === "left" ? "ml-4" : "mr-4");
      break;
    case "default":
    default:
      buttonClasses.push("h-10 max-h-10 py-2.5");
      type !== "tertiary" && buttonClasses.push("px-4");
      lableClasses.push("fontStyle-button-base");
      icon && lableClasses.push(iconPos === "left" ? "ml-3" : "mr-4");
  }
  buttonClasses.push(className);
  const Content = () => {
    if (label && icon) {
      return (
        <>
          {iconPos === "left" && <img src={icon} className={cn(iconClasses)} />}
          <span className={lableClasses.join(" ")}>{label}</span>
          {iconPos === "right" && (
            <img src={icon} className={cn(iconClasses)} />
          )}
        </>
      );
    }
    if (label) {
      return <span className={cn(lableClasses)}>{label}</span>;
    }
    if (icon) {
      return <img src={icon} className={cn(iconClasses)} />;
    }
  };
  if (link) {
    return (
      <a href={link} className={cn(buttonClasses)}>
        <Content />
      </a>
    );
  }
  return (
    <button className={cn(buttonClasses)}>
      <Content />
    </button>
  );
};
