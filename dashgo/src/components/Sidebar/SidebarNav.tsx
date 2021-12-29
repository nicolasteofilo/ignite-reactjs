import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
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
        <NavLink href="/dashboard" icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink href="/dashboard" icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
  </Stack>
  ) 
} 