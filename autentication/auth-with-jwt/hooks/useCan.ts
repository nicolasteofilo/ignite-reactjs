import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

type useCanProps = {
    permissions?: string[];
    roles?: string[];
}

function useCan({ permissions = [], roles = [] }: useCanProps) {
    const { user, isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated) {
        return false
    }

    if(permissions?.length > 0) {
        // o every vai retornar true se todos os elementos do array forem true
        const hasAllPermissions = permissions.every(permission => {
            return user.permissions.includes(permission)
        })

        if(!hasAllPermissions) {
            return false
        }
    }

    if(roles?.length > 0) {
        // o every vai retornar true se todos os elementos do array forem true
        const hasAllRoles = roles.some(role => {
            return user.roles.includes(role)
        })

        if(!hasAllRoles) {
            return false
        }
    }

    return true
}

export { useCan }