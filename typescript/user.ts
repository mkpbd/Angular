interface AdminUser extends BaseUser {
    type: 'admin';
    adminSince: number;
}
type User4 = AuthenticatedUser | AnonymousUser | AdminUser;
function onWebsiteSince(user: User4): number {
    switch (user.type) {
        case 'authenticated':
            return user.loggedSince;
        case 'anonymous':
            return user.visitingSince;
        case 'admin':
            // without this case, we could not even compile the code
            // as TS would complain that all possible paths are not returning a
            value
            return user.adminSince;
    }
}