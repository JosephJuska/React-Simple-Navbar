import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({to, children, ...props}: any) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <Link className={isActive ? 'active' : ''} to={to} {...props}>
            {children}
        </Link>
    );
}