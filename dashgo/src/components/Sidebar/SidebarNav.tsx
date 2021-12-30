import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Úsuarios</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃo">
        <NavLink href="/forms" icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
      <NavSection title="SAIR">
        <NavLink href="/logout" icon={RiLogoutCircleLine}>Sair</NavLink>
      </NavSection>
  </Stack>
  ) 
} 