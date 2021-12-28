import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export default function Sidebar() {
  return (
    <Box as="aside" w="64">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiContactsLine}>Úsuarios</NavLink>
          </NavSection>
          <NavSection title="AUTOMAÇÃo">
            <NavLink icon={RiInputMethodLine}>Forms</NavLink>
            <NavLink icon={RiGitMergeLine}>Automação</NavLink>
          </NavSection>
      </Stack>
    </Box>
  )
}