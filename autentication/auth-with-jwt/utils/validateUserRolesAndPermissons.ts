type User = {
  permissions: string[];
  roles: string[];
};

type validateUserRolesAndPermissonsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserRolesAndPermissons({
  user,
  permissions,
  roles,
}: validateUserRolesAndPermissonsParams) {
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

    return true;
}
