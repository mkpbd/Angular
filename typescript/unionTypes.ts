interface User {
    type: 'authenticated' | 'anonymous';
    name: string;
    // other fields
}
interface AuthenticatedUser extends User {
    type: 'authenticated';
    loggedSince: number;
}
interface AnonymousUser extends User {
    type: 'anonymous';
    visitingSince: number;
}


function onWebsiteSince(user: User): number {
    if (user.type === 'authenticated') {
        // this is a LoggedUser
        return (user as AuthenticatedUser).loggedSince;
    } else if (user.type === 'anonymous') {
        // this is an AnonymousUser
        return (user as AnonymousUser).visitingSince;
    }
    // TS doesn't know every possibility was covered
    // so we have to return something here
    return 0;
}


function isAuthenticated(user: User): user is AuthenticatedUser {
    return user.type === 'authenticated';
}
function isAnonymous(user: User): user is AnonymousUser {
    return user.type === 'anonymous';
}
function onWebsiteSince1(user: User): number {
    if (isAuthenticated(user)) {
        // this is inferred as a LoggedUser
        return user.loggedSince;
    } else if (isAnonymous(user)) {
        // this is inferred as an AnonymousUser
        return user.visitingSince;
    }
    // TS still doesn't know every possibility was covered
    // so we have to return something here
    return 0;
}


interface BaseUser {
    name: string;
    // other fields
}
interface AuthenticatedUser extends BaseUser {
    type: 'authenticated';
    loggedSince: number;
}
interface AnonymousUser extends BaseUser {
    type: 'anonymous';
    visitingSince: number;
}
type User3 = AuthenticatedUser | AnonymousUser;
function onWebsiteSince3(user: User3): number {
    if (user.type === 'authenticated') {
        // this is inferred as a LoggedUser
        return user.loggedSince;
    } else {
        // this is narrowed as an AnonymousUser
        // without even testing the type!
        return user.visitingSince;
    }
    // no need to return a default value
    // as TS knows that we covered every possibility!
}