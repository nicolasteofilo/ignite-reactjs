import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false;

  if(asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {/* clonar o primeiro elemento que vem dentro do link e modificar alguma coisa dentro dele */}
      {cloneElement(children, { 
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  )
}