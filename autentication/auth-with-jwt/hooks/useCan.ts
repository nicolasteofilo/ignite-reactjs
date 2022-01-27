import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { validateUserRolesAndPermissons } from "../utils/validateUserRolesAndPermissons"

type useCanProps = {
    permissions?: string[];
    roles?: string[];
}

function useCan({ permissions = [], roles = [] }: useCanProps) {
    const { user, isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated) {
        return false
    }

    const userHasValidPermissions = validateUserRolesAndPermissons({
        user,
        permissions,
        roles,
    })

    return userHasValidPermissions
}

export { useCan }